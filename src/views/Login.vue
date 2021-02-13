<template>
  <b-container class="mt-4">
    <b-row>
      <b-col
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4">
        <b-form @submit.prevent="login">
          <b-form-group label="Email">
            <b-form-input
              v-model.trim="email"
              type="email"
              placeholder="Enter email"
              required>
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              v-model.trim="password"
              type="password"
              placeholder="Enter password"
              required>
            </b-form-input>
          </b-form-group>
          <b-form-group
            v-if="errorMsg"
            class="text-danger">
            <small>{{ errorMsg }}</small>
          </b-form-group>
          <b-button
            type="submit"
            variant="primary">Login</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";


export default {
    name: 'login',
    data(){
        return{
            email: "",
            password: "",
            errorMsg: ""
        }
    },
    methods: {
        login(){
          console.log("what up boy")
          try{
            const user = firebase.default.auth()
              .signInWithEmailAndPassword(this.email, this.password)
              .then(data => {
                console.log(data);
                this.$router.replace({ path: "/admin" });
              })
            console.log(user);
          }catch(err){
            console.log(err);
          }
        }
    }
}
</script>