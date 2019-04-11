<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Image</span>
        <span>Gallery</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/signin" flat color="grey"  v-if="!isUserLogIn()" id="signOutBtn" @click="signout">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout>
        <v-flex class="mt-5" >
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <vue-initials-img :name="getUserName()"/>
            </v-responsive>
            <v-car-text>
              <div class="subheading">{{getUserName()}}</div>
            </v-car-text>
            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      drawer: false,
      links: [
      //  { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "star", text: "Top Images", route: "/topimages" },
        { icon: "fiber_new", text: "New Images", route: "/newimages" },
        { icon: "library_add", text: "Add Image", route: "/addimage" },
        { icon: "accessibility", text: "Users", route: "/users" },
       /* {
          icon: "sentiment_satisfied_alt",
          text: "Playground",
          route: "/playground"
        },
*/        { icon: "help", text: "Help", route: "/help" }
      ]
    };
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("Signed out!!");
        })
        .catch(function(error) {
          // An error happened.
          console.log("Something went wrong:" + error.messages);
        });
    },
    isUserLogIn() {    
      firebase.auth().onAuthStateChanged(function(user) {
       
        if (user) {
          // User is signed in.
          return true;          
        } else {
          // No user is signed in.
          return false;        

        }
      });
    },
    getUserName(){
      let user = firebase.auth().currentUser;
      if(user != null){
        return user.displayName;
      }
    }
  }
};
</script>