<template>
  <b-container >
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-form @submit.prevent="login">
          <b-form-group label="Email">
            <b-form-input
              v-model.trim="email"
              type="email"
              placeholder="Enter email"
              size="lg"
              required>
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              v-model.trim="password"
              type="password"
              placeholder="Enter password"
              size="lg"
              required>
            </b-form-input>
          </b-form-group>
          <b-button
            size="lg"
            type="submit"
            variant="primary">Login</b-button>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";


export default {
    name: 'login',
    data(){
        return{
            email: "",
            password: "",
            error: null
        }
    },
    created(){
    },
    methods: {
        login(){
          firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$router.replace({name: "admin"});
            console.log(data);
          }).catch(err => {
            this.error = err.message;
          })
        },
        checkUser(){
          return this.$store.getters.auth
        }
    }
}
</script>

<style scoped>
form{
  text-align: center;
}
input{
  padding: 0.5rem;
  border-radius: 3px;
  border-image-source: linear-gradient(rgb(131, 131, 131), #E07A5F);
  border-width: 3px;
  border-image-slice: 5;
  
}

button{
  padding-left: 100px;
  padding-right: 100px;
  background-image: linear-gradient(rgb(131, 131, 131), #E07A5F);
  border: none;
  transition: 500ms all ease-in-out;
}
button:hover{
  background-image: linear-gradient(rgb(85, 85, 85), #d37961);
}
</style>