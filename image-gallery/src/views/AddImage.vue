<template>
  <div class="AddImage">
    <h1>Add new image</h1>

    <v-container class="my-10">
      <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
       <img :src="imageUrl" height="150" v-if="imageUrl">
        <v-text-field
          label="Select Image to upload"
          @click="pickFile"
          v-model="imageName"
          prepend-icon="attach_file"
        ></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*"
          @change="onFilePicked"
        >


          <v-flex xs12 sm6 md3>
              <v-text-field
                      label="Title"
                      name="titleImage"
                      id="titleImage"
              ></v-text-field>
          </v-flex>

          <v-flex xs6>
              <v-textarea
                      name="descriptionImage"
                      label="Caption"
                      value=""
                      id="captionImage"
                      hint="Write a caption of the image."
              ></v-textarea>
          </v-flex>

          <v-btn outline
                 color="teal"
                 @click="addImage"
          >Add Image</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  import db from '@/fb'


  let imgURL;


export default {
  data: () => ({
    title: "Image Upload",
    dialog: false,
    imageName: "",
    imageUrl: "",
    imageFile: "",

  }),

  methods: {
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {

          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...


          // to make name unique.
          let dateNow = new Date();
          this.imageName = this.imageName + dateNow.getTime();


          let storeRef = firebase.storage().ref('Images/' + this.imageName);

          let task = storeRef.put(this.imageFile);

          //update progress bar
          task.on('state_changed',

                  function progress(snapshot) {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('uploaded ' + percentage + '%');
                  },
                  function error(err) {
                    // What happens if something went wrong?
                    console.log('Something went wrong ' + err);
                  },
                  function complete() {
                    console.log("COMPLETED!");


                    storeRef.getDownloadURL().then(function(urlToImage) {
                      imgURL = urlToImage;
                    });

                  }
          );



        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },

    addImage() {

        let user = firebase.auth().currentUser;
        let nameOfUser;

        if (user != null) {
            nameOfUser = user.displayName;
        }

        let imgTitle = document.getElementById('titleImage').value;
        let imgCap = document.getElementById('captionImage').value;


        if(imgURL == null)
        {
            alert('Select an image to upload!');
        }
        else if(imgTitle === "")
        {
            alert('Add a title to your image');
        }
        else if(imgCap === "")
        {
            alert('Add a caption to your image');
        }
        else
        {
            let dateNow = new Date();
            let month = dateNow.getMonth()+1;

            if(month < 10)
            {
                month = '0' + month;
            }

            let day = dateNow.getDate();

            if(day < 10)
            {
                day = '0' + day;
            }
            let dateFormatted = dateNow.getFullYear() + '-' + month + '-' + day;

            let imageToFirestore = {
                url: imgURL,
                upload: dateFormatted,
                rating: 0,
                numberOfRatings: 0,
                title: imgTitle,
                caption: imgCap,
                user: nameOfUser
            };

            let docName = imgTitle + nameOfUser;

            db.doc(docName).set(imageToFirestore).then(function () {
                alert('Picture uploaded!');
            });
        }


    }
  }
};
</script>
