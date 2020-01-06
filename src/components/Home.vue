<template>
<div style="background-color: #fe7e41;">

          
    <b-card no-body class="overflow-hidden" style="min-width: 85%;
      color: #511c0f; background-color: #fe7e41;  border: none; morgin-bottom: 3%;
      margin-left: 12%; z-index: 10; margin-top: 2rem">
      <b-row no-gutters style="border: none;
        background-color: #fe7e41; width: 85%; border-radius: 0px;">
        <b-col lg="6">
          <b-card-img v-bind:src="boatMe" class="rounded-circle"
            style="width: 80%; margin-left: 10%"></b-card-img>
        </b-col>
        <b-col sm="6">
          <b-card-body title="Kendall Roberts" >
            <b-card-text style="font-size: 14pt;">
              Web-Deveoper, dog owner and part-time dad joke comedian
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  <b-card deck style="background-color: #fe7e41; border: none;">
    <b-row>
      <b-col sm="6" >
        <b-card-body>
          <b-card-text style="padding-top: 3rem; color: #511c0f; 
          font-size: 22pt;"><i>"No! Try not! Do or do not, there is no try"</i></b-card-text>
            <footer style="color: #007471" class="blockquote-footer">
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
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); "
          fade
          img-width="1024"
           >
          <b-carousel-slide
            v-bind:img-src="cliffMe"
          ></b-carousel-slide>
          <b-carousel-slide
            v-bind:img-src="jumpMe"
          ></b-carousel-slide>
          <b-carousel-slide
            v-bind:img-src="boatsAndMe"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </b-card>

  

  <b-card-group deck style="margin: 0 2rem; padding-bottom: 1rem;
   background-color: #fe7e41; z-index: 1;" id="homeCards">
    <b-card style="background-color: #02525b; color: #fea356">
      <template v-slot:header>
        <h4 class="mb-0">My Education</h4>
      </template>
      <b-card-text>
        I've been interested in technology and code since I was in highschool. 
        The first project I fell in love with was setting up Retropie on a raspberry pi.
        Ever since then I've loved this field. So I went to Ozarks Technical Community 
        College to improve my knowledge. I am currently half-way through my degree with much more to learn.
      </b-card-text>
    </b-card>

    <b-card style="background-color: #02525b; color: #fea356;" >
      <template v-slot:header>
        <h4 class="mb-0">About Me</h4>
      </template>
      <b-card-text>
        Interesting things about me include the following. I played football and 
        ran track in highschool. The boys and I went to state for track and feild 
        several years in a row. I play the guitar, I feel as though music has a 
        way of putting a person at ease and can improve your thoughts. Lastly, 
        I am a proud owner of my blue heeler Koba. 

      </b-card-text>
    </b-card>

    <b-card style="background-color: #02525b; color: #fea356;">
      <template v-slot:header>
        <h4 class="mb-0">My Future</h4>
      </template>
      <b-card-text>
        Well first thing is finishing my associates degree in Computer
        Information Science. After that I would love to land a front-end 
        deveoper job. My long-term goal is to eventually become a full-stack 
        deveoper and know the all there is to know about Web-site deveopment.
      </b-card-text>
    </b-card>
  </b-card-group>



    
</div>
</template>

<script>
import cliffMe from '../assets/cliffMe.png';
import boatMe from '../assets/boatMe.jpg';
import boatsAndMe from '../assets/boatsAndMe.png';
import jumpMe from '../assets/jumpMe.png';

export default {
  name: 'home',
  data(){
      return{
        cliffMe,
        boatMe,
        boatsAndMe,
        jumpMe
      }
  },

  props: {}
}
</script>


<style scoped>

    #homeCards .card:hover{
      -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        transform: scale(1.07); 
    }

    .rounded-circle:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        transform: scale(1.1); 
    }

    .card{
      margin-bottom: 0;
    }
</style>