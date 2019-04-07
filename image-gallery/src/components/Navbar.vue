<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Image</span>
        <span>Gallery</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn flat color="grey"  dark v-on="on">
            <span>Log In</span>
            <v-icon right>perm_identity</v-icon>
          </v-btn>
        </template>

        <v-container fluid fill>
      
          
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"  @action="login">Login</v-btn>
              </v-card-actions>
            </v-card>
        
      </v-container>
      </v-dialog>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
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
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "star", text: "Top Images", route: "/topimages" },
        { icon: "fiber_new", text: "New Images", route: "/newimages" },
        { icon: "library_add", text: "Add Image", route: "/addimage" },
        { icon: "accessibility", text: "Users", route: "/users" },
        {
          icon: "sentiment_satisfied_alt",
          text: "Playground",
          route: "/playground"
        },
        { icon: "help", text: "Help", route: "/help" }
      ]
    };
  },
  methods: {
    login() {
      this.$refs.image.click();
    }
  }
};
</script>