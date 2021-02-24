    <template>
      <b-navbar>
        <b-navbar-brand style="color: rgb(131, 131, 131)" href="/">
            <h1>Kendall Roberts</h1>
        </b-navbar-brand>
        <div class="pageMenu" id="nav">
          <div class="banner">
            <img :src=navPic.img>
          </div>
          <div class="screenNav">
            <ul v-if="user.loggedIn == true">
              <li v-on:click="navToggle"><router-link to="/" data-text="Home">Home</router-link></li>
              <li v-on:click="navToggle"><router-link to="/blog" data-text="Blog">Blog</router-link></li>
              <li v-on:click="navToggle"><router-link to="/admin" data-text="admin">Admin</router-link></li>
              
            </ul>
            <ul v-else>
              <li v-on:click="navToggle"><router-link to="/" data-text="Home">Home</router-link></li>
              <li v-on:click="navToggle"><router-link to="/blog" data-text="Blog">Blog</router-link></li>
              <li v-on:click="navToggle"><router-link to="/login" data-text="login">Login</router-link></li>

            </ul>
          </div>
            <span class='menuIcon' id="toggle" v-on:click="navToggle">
              <i class="fas fa-bars"></i>
            </span>
        </div>
    </b-navbar> 
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import "firebase/auth"; 


export default {
    name: 'NavBar',
    data(){
        return{
          navPic: ""
        }
    },
    computed: {
      ...mapGetters({
        user: "user"
      })
    },
    methods: {
      navToggle(){
        const nav = document.getElementById("nav");
        const toggle = document.getElementById("toggle");
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    }
  }, created(){
    firebase.firestore().collection("assets").doc('navPic')
    .get().then(snapshot =>{
      if(snapshot.exists){
        this.navPic = snapshot.data()
      }else{
        console.log("Doesnt Exist")
      }
    })
  }
}
</script>