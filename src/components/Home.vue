<template>
<div>
  <!-- Rounded Circle Card -->
  <b-card-group class="roundContainer">
    <b-row>
      <b-col xl="6">
        <b-card no-body class="text-center">
          <b-card-img v-bind:src="mainMe" 
          img-alt="@taryntaylor" 
          class="rounded-circle"></b-card-img>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="text-center" id="titleCard" >
          <b-card-body title="Kendall Roberts" >
            <b-card-text>
              Web-Developer, Student, and Part-Time Dad Joke Comedian
            </b-card-text>
          </b-card-body>
        </b-card>
        <b-card>
          <a href="https://github.com/kendall1978?tab=repositories"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kendall-roberts-1b8b3a171/"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/kendertsrondall"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/kendall_roberts49/"><i class="fab fa-instagram"></i></a>
        </b-card>
      </b-col>
    </b-row>
  </b-card-group>
  <b-card class="slidesCard">
    <b-row>
      <b-col>
        <div class="slidesTitle">
          <b-card-body>
            <b-card-text class="titleText">
              I built this website using Vue Js, just to try out some new technologies. Take a look
              around. The bugs might only bite a little. Also, enjoy the Star Wars quote below. 
            </b-card-text>
            <b-card-text class="quote"><i>"No! Try not! Do or do not, there is no try"</i></b-card-text>
              <footer class="blockquote-footer quoteFoot">
                Yoda 
              </footer>
          </b-card-body>
        </div>
      </b-col>
      <b-col xl="6">
        <b-carousel
          id="carousel-fade">
          <b-carousel-slide 
            v-bind:img-src="laidBack" img-alt="@taryntaylor"
          ></b-carousel-slide>
          <b-carousel-slide
            v-bind:img-src="rocksMe"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </b-card>
  <div class="newContain">
      <div v-for="card in cardContent" :key="card.id">
        <b-col>
          <b-card align="left" class="newBox">
            <div class="cardContent">
              <h4>{{card.title}}</h4>
              <b-card-text>
                {{card.content}}
              </b-card-text>
            </div>
          </b-card>
        </b-col>
      </div>
  </div>
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
        jumpMe,
        cardContent: [{
          id: 1,
          title: "My Education",
          content: "I've been interested in technology and code since I was in high school. My first project-setting me up to love this field-was putting RetroPie on a Raspberry Pi. Ever since then I've loved this field. So I went to Ozarks Technical Community College to improve my knowledge. I am currently half-way through my degree."
          },
          {
            id: 2,
            title: "My Life",
            content: "I played football and ran track in high school, and the boys team and I went to state for track and field several years in a row. I play the guitar. Music can put people at ease and help improve their thoughts.I enjoy watching Marvel and Disney movies with my girlfriend Taryn. Taryn also gets full credit for the fantastic photos above."
          },
          {
            id: 3,
            title: "My Future",
            content: "My primary focus is finishing my associates degree in Computer Information Science. After that my goal is to land my first front-end developer job. My long-term goal is eventually to become a full-stack developer. At the end of the day I just want to learn all that I can about web development."
          }
          
        ]
      }
  },

  props: {}
}
</script>


<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:rgb(131, 131, 131);
  background: rgb(36, 37, 39);

}

.fab, .fas{
  font-size: 5em;
  padding: 20px;
  transition: all 300ms ease-in;


}


.fas:hover, .fab:hover{
  color: rgba(212, 212, 212, 0.7);
}

.roundContainer{
  width: 100%;
  height: 80%;
  background-color: rgb(36, 37, 39);

  
}

.roundContainer .card{
  width: 100%;
  background-color: rgb(36, 37, 39);  
  border: none; 
  margin: 50px auto;
  text-align: center;
}

.rounded-circle{
  transition: all 350ms ease-in;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5) ;
  
}

#titleCard{
  width: 80%;
  border-radius: 10px;
  border: none;
  padding: 20px 17px;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, .7),
  -10px -10px 14px 0 rgba(78, 78, 78, 0.548) ;
}

.rounded-circle:hover{
  transform: translateY(-20px);
  
}



.rounded-circle {
  width: 80%; 
  margin-left: 10%;
}
/* Mix card styles */

.newContain{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 60px 0;
  
  
}

.newBox{
  padding: 1.75px .5px;
  transition: all 400ms ease-in-out;
  z-index: 1;
  width: 450px;
  height: 475px;
  margin: 30px 20px;
 
} 

 .newContain .newBox::before{
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  transform: skew(1.7deg, 1.7deg);
  background: linear-gradient(300deg, #E07A5F, #81B29A);
  z-index: -1;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5),
  -10px -10px 14px 0 rgba(78, 78, 78, 0.548)  ;
  
}

.cardContent{
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black; 
  border-radius: 0 8px 0 8px;
  

}

.newBox .cardContent p{
  font-size: 1.25em;
  padding: 10px 15px;
}

.newBox .cardContent h4{
  font-size: 3em;
  padding: 10px 5px;
  opacity: .8;
  transition: all 350ms ease-in;
}

.newBox:hover .cardContent h4{
  transform: translateX(20px);
}

.newBox:hover{
  transform: translateY(-10px);
}


.slidesCard{
  border:none;
}

.slidesTitle{
  width: 80%;
  margin: 50px auto;
  padding: 30px 20px;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5),
  -10px -10px 14px 0 rgba(78, 78, 78, 0.548)  ;
  border-radius: 8px;

}

.slidesTitle .titleText{
  font-size: 25px;
  padding: 5px 10px 40px 10px;
}

.slidesTitle .quote{
  font-size: 35px;
  padding: 40px 10px 40px 10px;
}

.quoteFoot{
  padding: 0 70px;
}


#carousel-fade{
  text-shadow: 0px 0px 2px #000; 
  margin: 25px 25px;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5);
  border: none; 
  border-radius: 8px;
  transition: all 400ms ease-in; 
}

.card p{
  font-size: 18px;
}
</style>