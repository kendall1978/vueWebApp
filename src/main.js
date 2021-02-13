
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID+".firebaseapp.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID+".appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

firebase.initializeApp(config);

let app

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if(!app){
    app = new Vue({
      router, 
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

