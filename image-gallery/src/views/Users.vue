<template>
  <div class="Users">
    <h1>Users of Image-Gallery</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="user in users" :key="user.email">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
                <vue-initials-img :name="user.name"/>
            </v-responsive>
            <v-car-text>
              <div class="subheading">{{user.name}}</div>
              <div class="grey--text">{{user.title}}</div>
              <div class="grey--text">E-Mail: {{user.email}}</div>
            </v-car-text>
            <v-card-actions>
              <v-btn-flat color="grey">
                <v-icon small left>message</v-icon>
                <span>CONTACT</span>
              </v-btn-flat>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'

    let users = [];

    const db_users = firebase.firestore().collection('users');
    db_users.onSnapshot(function(querySnapshot) {

      users = [];

      querySnapshot.forEach(function(doc) {
              
        let u = {
          name: doc.data().name,
          title: doc.data().title,
          email: doc.data().email,
        };

        users.push(u);
      });


    });



export default {
  data() {
    return {
      users: users,
      team: [
        { name: "Christoph", role: "Web dev", registrationDate: "02.03.2018" },
        { name: "Paul", role: "Photographer", registrationDate: "02.03.2018" },
        { name: "Mike", role: "Web dev", registrationDate: "02.03.2018" },
        { name: "Steve", role: "Web dev", registrationDate: "02.03.2018" },
        { name: "Peter", role: "Web dev", registrationDate: "02.03.2018" }
      ]
    };
  }
};
</script>
