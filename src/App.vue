<template>
  <div>
    <div class="aboveFooter">
      <nav-bar></nav-bar>
      <router-view></router-view>  
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import jumpMe from "./assets/jumpMe2.jpg";
import NavBar from './components/NavBar';
import FootBar from './components/FootBar';



export default {
  components:{
    NavBar,
    FootBar
  },
  name: 'app',
  data(){
    return{
      jumpMe
    }
  },
    methods: {
    
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
  
  transition: all 475ms ease-out;
  z-index: 10;

}

.pageMenu.active{
  transform: translateY(100%);
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
    font-size: 1.5em;
  }
  .menuIcon .fas{
    font-size: 3em;
  }
}
.navbar-brand{
  font-family: 'Rock Salt', cursive;
}


</style>
