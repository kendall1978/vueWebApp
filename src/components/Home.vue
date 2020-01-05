<template>
<div>
      <b-card
        overlay
        v-bind:img-src="cliffMe"
        img-alt="Card Image"
        text-variant="white"
        title="Kendall Roberts"
        sub-title="Web Developer, Part-time dad joke comedian "
        style="min-width: 100%; border: none;">

      </b-card>
    <b-card no-body class="overflow-hidden" style="min-width: 100%;
    background-color: #261447; color: white;">
    <b-row no-gutters>
      <b-col lg="6">
        <b-card-img v-bind:src="portraitMe" class="rounded-circle"
        style="width: 80%; margin-left: 10%"></b-card-img>
      </b-col>
      <b-col sm="6">
        <b-card-body title="Horizontal Card" >
          <b-card-text>
                Hello, Im Kendall Roberts. I am an aspiring web deveoper. Currently enrolled at Ozarks Technical Community                     
                College hunting down that associate degree in Computer Information Science. I fell in love with code and tech 
                a long time ago working on a project far far away. Anyways feel free to explore this website that I built using 
                the Vue CLI
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
import cliffMe from '../assets/cliffMe.jpg';
import bigMe from '../assets/bigMe.jpg';
import portraitMe from '../assets/portraitMe.jpg';
export default {
  name: 'home',
  data(){
      return{
        cliffMe,
        bigMe,
        portraitMe
      }
  },

  props: {}
}
</script>


<style scoped>
    .rounded-circle{

    }

    .rounded-circle:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        transform: scale(1.1);
        z-index: 1;  
    }

    .card{
      margin-bottom: .35%;
      font-family: 'Varela Round', sans-serif;
    }
</style>