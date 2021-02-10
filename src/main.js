
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import store from './store';
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseApp from './firebase'


Vue.use(BootstrapVue);

let app

const init = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setUser', user)
    FirebaseApp.init()

  }else {
    store.commit('setUser', null)
  }
  console.log(user);
  init()
})
