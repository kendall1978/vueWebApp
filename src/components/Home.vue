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
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
          <i class="fas fa-envelope"></i>
          <i class="fab fa-instagram"></i>
          
        </b-card>
      </b-col>
    </b-row>
  </b-card-group>
  <b-card deck style="background-color: #fe7e41; border: none;">
    <b-row>
      <b-col md="6" >
        <b-card-body>
          <b-card-text style="padding-top: 2rem; color: #511c0f; font-size: 17pt;">
            I built this website using Vue Js, just to try out some new technologies. Take a look
            around. The bugs might only bite a little. Also, enjoy the Star Wars quote below. 
          </b-card-text>
          <b-card-text style="padding-top: 3rem; color: #511c0f; 
          font-size: 22pt;"><i>"No! Try not! Do or do not, there is no try"</i></b-card-text>
            <footer style="color: #02525b; font-size: 13pt;
            text-indent: 5em;" class="blockquote-footer">
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
        border: solid #02525b 4px; border-radius: 4px;">
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
  <b-card-group class="newContain">
    <b-row>
        <b-col>
          <b-card class="newBox">
            <div class="cardContent">
              <h4>My Education</h4>
              <b-card-text>
                I've been interested in technology and code since I was in high school. 
                My first project-setting me up to love this field-was putting RetroPie on a Raspberry Pi.
                Ever since then I've loved this field. So I went to Ozarks Technical Community 
                College to improve my knowledge. I am currently half-way through my degree.
              </b-card-text>
            </div>
          </b-card>
        </b-col>
      <b-col>
        <b-card class="newBox">
          <div class="cardContent">
            <h4>My Life</h4>
            <b-card-text>
              I played football and ran track in high school, and the boys team and I 
              went to state for track and field several years in a row. I play the guitar. 
              Music can put people at ease and help improve their thoughts.I enjoy 
              watching Marvel and Disney movies with my girlfriend Taryn. 
              Taryn also gets full credit for the fantastic photos above.
            </b-card-text>
          </div>
        </b-card>
      </b-col>
      <b-col >
        <b-card class="newBox">
          <div class="cardContent">
            <h4>My Future</h4>
            <b-card-text>
              My primary focus is finishing my associates degree in Computer
              Information Science. After that my goal is to land my first front-end 
              developer job. My long-term goal is eventually to become a full-stack 
              developer. At the end of the day I just want to learn all that I can about web development.
            </b-card-text>
          </div>
        </b-card>
      </b-col>
    </b-row>
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

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:#351D2E;
  background: #B7B7B7;

}

.fab, .fas{
  font-size: 5em;
  padding: 20px;
  transition: all 300ms ease-in;


}


.fas:hover, .fab:hover{
  color: rgba(42, 42, 42, 0.7);
}

.roundContainer{
  width: 100%;
  height: 80%;
  background-color: #B7B7B7;

  
}



.roundContainer .card{
  width: 100%;
  background-color: #B7B7B7;  
  border: none; 
  margin: 50px auto;
  text-align: center;
}

.rounded-circle{
  transition: all 350ms ease-in;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5),
  -10px -10px 12px 0 rgba(255, 255, 255, .9) ;
  
}

#titleCard{
  width: 80%;
  border-radius: 20px;
  padding: 20px 17px;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.5),
  -8px -8px 12px 0 rgba(255, 255, 255, .9) ;
}

.rounded-circle:hover{
  transform: translateY(-20px);
  
}



.rounded-circle {
  width: 80%; 
  margin-left: 10%;
}

.contain{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.contain .box{
  width: 450px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;
  padding: 5px;
  background: linear-gradient(100deg, rgb(7, 247, 235), rgb(44, 6, 61));
  border-radius: 2px;
  transition: all 400ms ease-in-out;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.5),
  -8px -8px 12px 0 rgba(255, 255, 255, .9) ;
  
}




.box .content{
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background: #d6d6d6;
  color: #fff;
  

}

.content h4{
  top: 60px;
  font-size: 3em;
  transition: all 250ms ease-in;
  padding: 20px 10px;
}
.content p{
  font-size: 20px;
  transition: all 300ms ease-in;
  padding: 15px 20px;
}
.content .fas{
  opacity: 0;
  transition: all 400ms ease-in;
  transform: translateX(240px);
  padding: 10px 50px;
}

.box:hover  .content h4{
  transform: translateX(45px);
}

.box:hover .fas{
  transform: translateX(50px);
  opacity: 1;
}


.box:hover{
  box-shadow: 100px, 100px, 100px, 100px;
}






/* Mix card styles */

.newContain{
  width: 100%;
  height: auto;
  padding: 75px 25px;
  
  
}

.newBox{
  width: 450px;
  height: 475px;
  margin: 50px 25px;
  padding: 1.75px;
  border-radius: 8px;
  transition: all 400ms ease-in-out;
  z-index: 1;
 
} 

 .newContain .newBox:before{
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(1.7deg, 1.7deg);
  padding: 5px;
  border-radius: 8px;
  background: linear-gradient(300deg, #313131de, rgb(105, 0, 74));
  z-index: -1;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.5),
  -10px -10px 12px 0 rgba(255, 255, 255, .9) ;
  
}


.newContain .newBox:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(190, 190, 190, 0.05);
  z-index: 1;
  pointer-events: none;
}

.cardContent{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  color: #000;
  

}

.card-group .card{
  text-align: center;
}

.newBox .cardContent p{
  font-size: 1.25em;
  padding: 10px 15px;
}



.newBox .cardContent h4{
  font-size: 3em;
  padding: 10px 5px;
  transition: all 350ms ease-in;
}

.newBox:hover h4{
  top: -40px;
}

.newBox:hover{
  transform: translateY(-10px);
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



    .card p{
      font-size: 18px;
    }
</style>