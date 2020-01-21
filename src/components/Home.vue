<template>
<div style="background-color: #fe7e41;">
  <!-- Rounded Circle Card -->
    <b-card no-body class="overflow-hidden" style="min-width: 85%;
      color: #511c0f; background-color: #fe7e41;  border: none; morgin-bottom: 3%;
      margin-left: 12%; z-index: 10;">
      <b-row no-gutters style="border: none;
        background-color: #fe7e41; width: 85%; border-radius: 0px;">
        <b-col lg="6">
          <b-card-img v-bind:src="mainMe" class="rounded-circle"
            style="width: 80%; margin-left: 10%"></b-card-img>
        </b-col>
        <b-col sm="6">
          <b-card-body title="Kendall Roberts" >
            <b-card-text style="font-size: 14pt;">
              Web-Developer, Student, and Part-Time Dad Joke Comedian
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  <b-card deck style="background-color: #fe7e41; border: none;">
    <b-row>
      <b-col md="6" >
        <b-card-body>
          <b-card-text style="padding-top: 2rem; color: #511c0f; font-size: 17pt;">
            I built this website using Vue Js, just to try out some new things. Take a look
            around the bugs might only bite a little. Also, enjoy the Star Wars quote below. 
          </b-card-text>
          <b-card-text style="padding-top: 3rem; color: #511c0f; 
          font-size: 22pt;"><i>"No! Try not! Do or do not, there is no try"</i></b-card-text>
            <footer style="color: #02525b; font-size: 13pt;" class="blockquote-footer">
              Yoda 
            </footer>
        </b-card-body>
      </b-col>
      <b-col lg="6">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000; 
          margin: 25px 25px -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        border: solid #02525b 4px; border-radius: 4px;
        "
          fade
          img-width="1024"
           >
          <b-carousel-slide 
            v-bind:img-src="laidBack"
          ></b-carousel-slide>
          <b-carousel-slide
            v-bind:img-src="jumpMe"
          ></b-carousel-slide>
          <b-carousel-slide
            v-bind:img-src="rocksMe"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </b-card>
  <b-card-group class="newContain">
    <b-card class="newBox">
      <div class="cardContent">
        <h4>My Education</h4>
        <b-card-text>
          I've been interested in technology and code since I was in highschool. 
          The first project I fell in love with was setting up Retropie on a raspberry pi.
          Ever since then I've loved this field. So I went to Ozarks Technical Community 
          College to improve my knowledge. I am currently half-way through my degree with much more to learn.
        </b-card-text>
      </div>
    </b-card>
    <b-card class="newBox">
      <div class="cardContent">
        <h4>About Me</h4>
        <b-card-text>
          Interesting things about me include the following. I played football and 
          ran track in highschool. The boys and I went to state for track and feild 
          several years in a row. I play the guitar, I feel as though music has a 
          way of putting a person at ease and can improve your thoughts. Lastly, 
          I am a proud owner of my blue heeler Koba.
        </b-card-text>
      </div>
    </b-card>
    <b-card class="newBox">
      <div class="cardContent">
        <h4>My Future</h4>
        <b-card-text>
          Well first thing is finishing my associates degree in Computer
          Information Science. After that I would love to land a front-end 
          deveoper job. My long-term goal is to eventually become a full-stack 
          deveoper and know the all there is to know about Web-site deveopment.
        </b-card-text>
      </div>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
import laidBack from '../assets/laidBack.jpg';
import mainMe from '../assets/mainMe.jpg';
import rocksMe from '../assets/rocksMe.jpg';
import jumpMe from '../assets/jumpMe.jpg';

export default {
  name: 'home',
  data(){
      return{
        laidBack,
        mainMe,
        rocksMe,
        jumpMe
      }
  },

  props: {}
}
</script>


<style scoped>

body{

    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #060c21;
    font-family: 'Poppins', sans-serif ;

}
/* Mix card styles */

.newContain{
  width: 80%;
  margin-left: 10%;
  z-index: 1;
  height: 25%;
}

.newContain .newBox{
  background: #3b3b3b;
  margin: 10px 15px;
  padding: 0 5px;
  border: 1px solid rgb(255, 255, 255);
  z-index: 1;
  height: 400px;
}

.newContain .newBox:before{
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(2deg, 2deg);
  z-index: -1;
  background: #4b4b4b;
}

.newContain .newBox:before{
  background: linear-gradient(100deg, #02525b, #fea356);
}

.newContain .newBox:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(190, 190, 190, 0.05);
  pointer-events: none;
}


.newBox{
  transition: all 500ms ease-in-out;
}
.cardContent{
  padding: 15px;
  color: #000;
  transform: translateY(80px);

}

.newBox .cardContent p{
  transition: all 250ms ease-in;
}



.newBox .cardContent h4{
  position: absolute;
  top: -60px;
  font-size: 2em;
  color: rgba(255, 255, 255, 0.527);
  transition: 350ms;
}

.newBox:hover p{
  transform: scale(1.03);
}
.newBox:hover h4{
  top: -40px;
}

.newBox:hover{
  transform: translateY(-10px);
}

    #homeCards .card:hover{
      -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        transform: scale(1.07); 
        z-index: 1;
        
    }

    .carousel-slide{
      transition-duration: 500ms;
      transition-timing-function: ease-in-out; 
    }

    

    #homeCards .card{
      transition-duration: 500ms;
      transition-property: box-shadow, transform;
      transition-timing-function: ease-in-out;
    }

    .rounded-circle{
      position: relative;
      transition-duration: 500ms;
      transition-property: transform, box-shadow, top;
      border: solid #02525b 4px;
      transition-timing-function: ease-in-out;
      top: 25px;

    }

    .rounded-circle:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        top: 10px;
        
    }

    .card{
      margin-bottom: 0;
    }
</style>