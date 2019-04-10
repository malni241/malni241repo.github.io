<template>
  <div class="Top Images">
    <h1>Top Images</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-btn small flat color="grey" @click="sortBy('rating')">
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

            <v-rating v-model="rating">{{image.rating}}</v-rating>
            <span
              class="black--text text--lighten-2 caption mr-2"
            >(#Ratings: {{ image.numberOfRatings }})</span>

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

let img = [];

db.onSnapshot(function(querySnapshot) {
  img = [];

  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    //      console.log(doc.id, " => ", doc.data());

    console.log("title = " + doc.data().title);

    let im = {
      title: doc.data().title,
      src: doc.data().url,
      rating: doc.data().rating,
      numberOfRatings: doc.data().numberOfRatings,
      dateOfSubmission: doc.data().upload
    };

    img.push(im);
  });
});

export default {
  /*firebase: {
    images: img
  },*/
  name: "HelloWorld",
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

      /*images: [
        {
          title: "Pre-fab homes",
          description: "description daf df asd fa ds ",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          rating: 3,
          numberOfRatings: 102,
          dateOfSubmition: "01.01.2019"
        },
        {
          title: "Favorite road trips",
          description: "descriptionadf dsaf dsf sad f",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          rating: 5,
          numberOfRatings: 144,
          dateOfSubmition: "05.02.2019"
        },
        {
          title: "Best airlines",
          description: "description daf dsaf sadf dsaf ",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          rating: 2,
          numberOfRatings: 23,
          dateOfSubmition: "06.02.2019"
        }
      ]*/

      /*images: db.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                title: doc.title
                src: doc.url
                rating: doc.rating
                numberOfRatings: doc.numberOfRatings
                dateOfSubmition: doc.upload


            });
        })*/
    };
  },
  methods: {
    sortBy(prop) {
      this.images.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
