<template>
  <div class="Top Images">
    <h1>Top Images</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="image in images" :key="image.title">
          <v-card class="text-xs-center ma-3">
            <v-img :src="image.src" height="200px"></v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{image.title}}</div>
                <span class="grey--text">{{image.description}}</span>
              </div>
            </v-card-title>
          

            <v-rating v-model="rating">{{image.rating}}</v-rating>
            <span class="black--text text--lighten-2 caption mr-2">({{ image.rating }})</span>

            <v-card-actions>
              <v-btn flat>Share</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          title: "Pre-fab homes",
          description: "description",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          rating: 3
        },
        {
          title: "Favorite road trips",
          description: "description",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          rating: 5
        },
        {
          title: "Best airlines",
          description: "description",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          rating: 2
        }
      ]
    };
  }
};
</script>
