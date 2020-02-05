<template>
  <div>
    <div class="aboveFooter">
      <div class="pageMenu" id="nav">
        <div class="banner">
          <img :src="rocksMe">
        </div>
        <div class="screenNav">
          <ul>
            <li><a data-text="Home">Home</a></li>
            <li><a data-text="Blog"> Blog</a></li>
          </ul>
        </div>
        <span class='menuIcon' id="toggle" v-on:click="navToggle"><i class="fas fa-bars"></i></span>
      </div>
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

       Right aligned nav items 
 
        </b-collapse>
      </b-navbar>
    
      <router-view></router-view> -->
    </div>
    <!-- <footer id="sticky-footer">
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
    </footer> -->
  </div>
</template>

<script>
import rocksMe from "./assets/rocksMe.jpg";

export default {
  name: 'app',
  data(){
    return{
      rocksMe
    }
  },
  methods: {
    navToggle: function(){
      var nav = document.getElementById("nav");
      var toggle = document.getElementById("toggle");
      nav.classList.toggle('active');
      
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Poppins&display=swap');

*{
  font-family: 'Poppins', sans-serif;
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
  transition: 500ms;

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
  transform: scaley(1);
  transform-origin: top;
}

.pageMenu .screenNav ul li a{
  position: relative;
  color: aqua;
  text-decoration: none;
  font-size: 4em;
  font-weight: 700;
  line-height: 1em;
  padding-top: 12px;
  display: inline-block;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;

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

.menuIcon{
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: rgb(36, 37, 39) ;
  background-size: 40px;
  cursor: pointer;
  background-repeat: no-repeat;

}
.menuIcon .fas{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 4em;
  color:#E07A5F;
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


</style>
