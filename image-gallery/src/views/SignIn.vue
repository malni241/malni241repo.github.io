<template>
    <div class="SignIn">


        <v-flex xs8 sm6 md3>
            <v-text-field

                    id="emailAddress"
                    name="emailInput"
                    label="Email"
            ></v-text-field>
        </v-flex>

        <v-flex xs8 sm6 md3>
            <v-text-field
                    :type="'password'"
                    id="pswrd"
                    name="passwordInput"
                    label="Password"
            ></v-text-field>
        </v-flex>

        <v-btn outline
               color="teal"
               @click="SignInFunction"
               id="signInBtn"
        >Sign In</v-btn>


        <v-btn to="/signup" outline
               color="teal"
               id="signUpBtn"
        >Sign Up</v-btn>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'
    import router from '../router'

    export default {
        name: "SignIn",
        methods: {
            SignInFunction() {

                let email = document.getElementById('emailAddress').value;
                let password = document.getElementById('pswrd').value;


                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    (user) => {
                        router.replace('topimages');
                    },
                    (err) => {
                        alert('Ooops ' + err.message)
                    }
                );

                /*
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (err) {

                    // If an error occur
                    let msgOfError = err.message;
                    let codeOfError = err.code;


                    // Display error message
                    if (codeOfError === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(msgOfError);
                    }
                    console.log(err);
                });*/

                console.log("Successful log in!");
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        // User is signed in.
                        document.getElementById('signOutBtn').disable = false;
                        this.$router.replace('topimages');
                    } else {
                        // No user is signed in.
                        document.getElementById('signOutBtn').disable = true;
                        this.$router.replace('login');
                    }
                });

            },

        }
    }

</script>

<style scoped>

</style>