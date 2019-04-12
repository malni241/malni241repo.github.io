<template>
  <div class="Top Images">
    <h1>Top Images</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-btn small flat color="grey" @click="sortBy('overallRating')">
          <v-icon left small>star</v-icon>
          <span class="caption text-lowercase">by rating</span>
        </v-btn>
        <v-btn small flat color="grey" @click="sortBy('dateOfSubmission')">
          <v-icon left small>date_range</v-icon>
          <span class="caption text-lowercase">by submition date</span>
        </v-btn>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="image in images" :key="image.title">
          <v-card class="text-xs-center ma-3">
            <v-img :src="image.src" height="200px" v-on="on"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{image.title}}</div>
                <div class="black--text">{{image.description}}</div>
                <div class="grey--text">Date of submission: {{image.dateOfSubmission}}</div>
              </div>
            </v-card-title>
            <v-rating v-model="image.overallRating" :readonly="true" :half-increments="true"></v-rating>
            <span
              class="black--text text--lighten-2 caption mr-2"
            >(#Ratings: {{ image.numberOfRatings }})</span>

            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn depressed small color="primary" v-on="on">RATE</v-btn>
              </template>

              <v-card class="elevation-16 mx-auto" width="300">
                <v-card-title class="headline" primary-title>Rate image: {{image.title}}</v-card-title>
                <v-card-text>
                  If you enjoy this image, please take a few seconds to rate it!
                  <div class="text-xs-center mt-5">
                    <v-rating
                      v-model="rating"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$vuetify.icons.ratingFull"
                      half-increments
                      hover
                    ></v-rating>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="justify-space-between">
                  <v-btn flat >No Thanks</v-btn>
                  <v-btn color="primary" flat @click="saveRating(rating, image)">Rate Now</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
            <div class="hello">
              <facebook :url="image.src" scale="3"></facebook>
              <twitter :url="image.src" title="image.title" scale="3"></twitter>
              <whats-app :url="image.src" title="image.title" scale="3"></whats-app>
              <pinterest :url="image.src" scale="3"></pinterest>
              <email :url="image.src" subject="image.title" scale="3"></email>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Pinterest,
  WhatsApp,
  Email
} from "vue-socialmedia-share";
import "firebase/firestore";
import db from "@/fb";
import "@/fb";

let img = [];

db.onSnapshot(function(querySnapshot) {
  img = [];

  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    //      console.log(doc.id, " => ", doc.data());

    console.log("user = " + doc.data().user);

    let im = {
      user: doc.data().user,
      title: doc.data().title,
      src: doc.data().url,
      rating: doc.data().rating,
      numberOfRatings: doc.data().numberOfRatings,
      dateOfSubmission: doc.data().upload,
      overallRating: doc.data().rating / doc.data().numberOfRatings // calculates the value of the star-ui
    };

    img.push(im);
  });
});
/* *****************************

   Run unit test: uncomment

***************************** */
//module.exports = img;

export default {
  /*firebase: {
    images: img
  },*/
  components: {
    Facebook,
    Twitter,
    Pinterest,
    WhatsApp,
    Email
  },
  data() {
    return {
      images: img
    };
  },
  methods: {
    openRateDialog() {},
    sortBy(prop) {
      this.images.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      console.log("sorting");
    },
    setNewRating: function() {
      console.log("new value: ");
    },
    saveRating(value, image) {
      console.log("new rating: " + value + " for image " + image.title + " ... saving in db");
      console.log("old rating: " + image.numberOfRatings);
      //image.rating = image.rating + value;
      // image.numberOfRatings = "10";
       console.log("new rating: " + image.numberOfRatings);


      var ref = db.doc(image.title + image.user);
      return ref.update({
          "numberOfRatings": image.numberOfRatings+1,
          "rating" : image.rating + value
      }).then(function(){
        console.log("updated data");
      }).catch(function(error){
        console.error("Error updating document: ", error);
      })

    }
  }
};
</script>
