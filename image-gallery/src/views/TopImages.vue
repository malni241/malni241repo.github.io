<template>
  <div class="Top Images">
    <h1>Top Images</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="image in images" :key="image.title">
           <v-card  class="text-xs-center ma-3">
          <v-img
            :src=image.src
            height="200px"
          >
          </v-img>
  
          <v-card-title primary-title>
            <div>
              <div class="headline">{{image.title}}</div>
              <span class="grey--text">{{image.description}}</span>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
  
          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
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
      { title: 'Pre-fab homes', description: 'description', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Favorite road trips', description: 'description', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'Best airlines', description: 'description', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }
    ]
    };
  }
};
</script>
