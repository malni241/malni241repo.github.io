<template>
    <div class="SignUp" style="align: center">

        <p>Sign Up to Image Gallery</p>

        <v-flex xs8 sm6 md3>
            <v-text-field

                    id="name"
                    name="name"
                    label="Name"
            ></v-text-field>
        </v-flex>

        <v-flex xs8 sm6 md3>
            <v-text-field

                    id="title"
                    name="title"
                    label="Title, e.g. Web Developer, Photographer, Art Lover"
            ></v-text-field>
        </v-flex>

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
               @click="SignUserUp"
        >Sign me up</v-btn>

    </div>
</template>

<script>
    import firebase from "firebase/app"
    import "firebase/auth"
    import router from '../router'
    import vue from '../main.js'
    import 'firebase/storage'
    import 'firebase/firestore'

    export default {
        data: () => {
            return {
                newUser: {
                    name: '',
                    title: '',
                    email: ''
                }
            }
        },
        methods: {
            addUserToDatabase(){
                console.log("adding user to database....");

                const db_users = firebase.firestore().collection('users');

                let newUser = {
                    name: document.getElementById('name').value,
                    title: document.getElementById('title').value,
                    email: document.getElementById('emailAddress').value
                };

                db_users.add(newUser).then(function () {
                    console.log('stored new user');

                });

            },
            SignUserUp() {
                console.log("Sign me up!");

                let email = document.getElementById('emailAddress').value;
                let password = document.getElementById('pswrd').value;


                firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
                    let name = document.getElementById('name').value;
                    let title = document.getElementById('title').value;

                    let user = firebase.auth().currentUser;                

                    user.updateProfile({
                        displayName: name,
                        title: title
                    }).then(
                        // success           
                                 
                        router.replace('topimages')                    
                    ).catch(function(error) {
                        // An error happened.
                        console.log(error.message);
                    });
                      

                }).catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;

                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                });

                document.getElementById('signOutBtn').disable = false;
                this.addUserToDatabase(); 

                // REDIRECT TO DASHBOARD
            }
        }
    }
</script>
