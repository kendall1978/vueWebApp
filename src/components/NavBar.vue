    <template>
      <b-navbar>
        <b-navbar-brand style="color: rgb(131, 131, 131)" href="/">
            <h1>Kendall Roberts</h1>
        </b-navbar-brand>
        <div class="pageMenu" id="nav">
          <div class="banner">
            <img :src="jumpMe">
          </div>
          <div class="screenNav">
            <ul>
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
import jumpMe from "../assets/jumpMe2.jpg";
export default {
    name: 'NavBar',
    data(){
        return{
            jumpMe
        }
    },
    computed: {
        user (){
            return this.$store.state.user
        }
    },
    methods: {
        navToggle: function(){
            const nav = document.getElementById("nav");
            const toggle = document.getElementById("toggle");
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
    }
    }
}
</script>