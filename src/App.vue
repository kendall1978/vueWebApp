<template>
  <div>
    <div class="aboveFooter">
      <b-navbar class="pageMenu">
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
            </ul>
          </div>
            <span class='menuIcon' id="toggle" v-on:click="navToggle">
              <i class="fas fa-bars"></i>
            </span>
        </div>
      </b-navbar>


      
      <!-- <b-navbar toggleable="lg" type="dark" style="background-color: rgb(36, 37, 39);">
        <b-navbar-brand style="color: rgb(131, 131, 131)" href="/">
            <strong>Kendall Roberts</strong>
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
             <b-nav-item to="/projects">Projects</b-nav-item> 
          </b-navbar-nav>
        </b-collapse>
      </b-navbar> -->
    
      <router-view></router-view>  
    </div>
    <footer id="sticky-footer">
      <div class="container text-center">
        <h6><strong>&copy; Kendall Roberts</strong></h6>
        <div class="icons">
          <a href="https://github.com/kendall1978?tab=repositories">
          <i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kendall-roberts-1b8b3a171/">
          <i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/kendertsrondall">
          <i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/kendall_roberts49/">
          <i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import jumpMe from "./assets/jumpMe2.jpg";


export default {
  name: 'app',
  data(){
    return{
      jumpMe
    }
  },
    methods: {
    navToggle: function(){
      var nav = document.getElementById("nav");
      var toggle = document.getElementById("toggle");
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
      
    }
  }
  
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Rock+Salt&display=swap');

*{
  font-family: 'Fira Sans', sans-serif;
}

.aboveFooter{
  min-height: 100vh;
  background-color: rgb(36, 37, 39);
}

.pageMenu{
  position: fixed;
  top: -100%;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(36, 37, 39);
  
  transition: all 500ms;
  z-index: 10;

}

.pageMenu.active{
  top: 0;
}

.pageMenu .banner{
  position: relative;
  min-width: 600px;
  height: 100%;

}

.pageMenu img{
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.pageMenu .screenNav{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;

}

.pageMenu .screenNav ul{
  position: relative;

}
.pageMenu .screenNav ul li {
  position: relative;
  list-style: none;
  padding: 0 20px;
  margin: 5px 0;
  overflow: hidden;
  display: table;
  
}

.pageMenu .screenNav ul li:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E07A5F;
  transition: all 500ms ease-in-out;
  transform: scaleY(0);
  transform-origin: bottom;
}

.pageMenu .screenNav ul li:hover:before{
  transition: all 500ms ease-in-out;
  transform: scaleY(1);
  transform-origin: top;
}

.pageMenu .screenNav ul li a{
  position: relative;
  color: #81B29A;
  text-decoration: none;
  font-size: 4em;
  font-weight: 550;
  line-height: 1em;
  padding-top: 12px;
  display: inline-block;
  text-transform: uppercase;
  transition: 450ms ease-in;

}

.pageMenu .screenNav ul li a:before{
  content: attr(data-text);
  position: absolute;
  bottom: -100%;
  left:0;
  color: #FFF;


}

.pageMenu .screenNav ul li:hover a{
  transform: translateY(-100%);
  color: #fff;
  
}

#toggle.menuIcon{
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background:transparent;
  background-size: 40px;
  cursor: pointer;
  

  

}
.menuIcon .fas{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 4em;
  color:#E07A5F;
}

@media screen and (max-width: 1000px){
  .pageMenu .banner{
    display: none;
  }
}




#sticky-footer{
  padding: 1rem 0 3rem 0;
  background: rgb(131, 131, 131);
  color: rgb(36, 37, 39);

}

.icons a{
  padding: 10px 10px;
  font-size: 5rem;
  color: rgb(36, 37, 39);
  transition: all 200ms ease-in;
}
.icons a:hover{
  color: #E07A5F;
}

@media screen and (max-width: 600px) {
  .navbar-brand h1{
    font-size: 1em;
  }
  .menuIcon .fas{
    font-size: 3em;
  }
}
.navbar-brand{
  font-family: 'Rock Salt', cursive;
}


</style>
