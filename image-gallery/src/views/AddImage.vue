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
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/storage'
  import 'firebase/firestore'

  import db from '@/fb'
export default {
  data: () => ({
    title: "Image Upload",
    dialog: false,
    imageName: "",
    imageUrl: "",
    imageFile: ""
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

          let storeRef = firebase.storage().ref('Images/' + this.imageName );

          let task = storeRef.put(this.imageFile);

          //update progress bar
          task.on('state_changed',

                  function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('uploaded ' + percentage + '%');
                  },
                  function error(err) {
                    // What happens if something went wrong?
                    console.log('Something went wrong ' + err);
                  },
                  function complete() {
                    console.log("COMPLETED!");
                    //alert("COMPLETED!");
                    // What happens when the upload is complete? Go back to the startpage?

                    storeRef.getDownloadURL().then(function(urlToImage) {
                        let imageToFirestore = {
                          url: urlToImage,
                          upload: new Date(),
                          ranking: 0
                        };

                        db.add(imageToFirestore).then(function () {
                          console.log('URL sent to database, document created');
                        });
                    });
                  }
          );



        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    }
  }
};
</script>
