<template>
  <div class="Users">
    <h1>Users of Image-Gallery</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">image goes here</v-responsive>
            <v-car-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
              <div class="grey--text">Registrationdate: {{person.registrationDate}}</div>
            </v-car-text>
            <v-card-actions>
              <v-btn-flat color="grey">
                <v-icon small left>message</v-icon>
                <span>MESSAGE</span>
              </v-btn-flat>
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
