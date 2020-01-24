<template>
<div style="background-color: #fe7e41;">
  <!-- Rounded Circle Card -->
    <b-card no-body  style="min-width: 85%;
      color: #511c0f; background-color: #fe7e41;  border: none; morgin-bottom: 3%;
      margin-left: 12%; z-index: 10;">
      <b-row no-gutters style="border: none;
        background-color: #fe7e41; width: 85%; border-radius: 0px;">
        <b-col lg="6">
          <b-card-img v-bind:src="mainMe" img-alt="@taryntaylor" class="rounded-circle"
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
  <div class="contain">
    <div class="box">
      <div class="content">
        <h4>My Education</h4>
        <p>
          I've been interested in technology and code since I was in high school. 
          My first project-setting me up to love this field-was putting RetroPie on a Raspberry Pi.
          Ever since then I've loved this field. So I went to Ozarks Technical Community 
          College to improve my knowledge. I am currently half-way through my degree.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <h4>My Education</h4>
        <p>
          I've been interested in technology and code since I was in high school. 
          My first project-setting me up to love this field-was putting RetroPie on a Raspberry Pi.
          Ever since then I've loved this field. So I went to Ozarks Technical Community 
          College to improve my knowledge. I am currently half-way through my degree.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <h4>My Education</h4>
        <p>
          I've been interested in technology and code since I was in high school. 
          My first project-setting me up to love this field-was putting RetroPie on a Raspberry Pi.
          Ever since then I've loved this field. So I went to Ozarks Technical Community 
          College to improve my knowledge. I am currently half-way through my degree.
        </p>
      </div>
    </div>
  </div>
  <b-card-group deck class="newContain">
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

}

.contain{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 7px solid red;
}

.contain .box{
  width: 450px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px auto;
  padding: 5px;
  transform: skew(2deg, 2deg);
  background: linear-gradient(100deg, rgb(7, 247, 235), rgb(44, 6, 61));
  border-radius: 2px;
  transition: all 400ms ease-in-out;
  
}




.box .content{
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background: rgba(49, 49, 49, 0.849);
  color: #fff;
  transform: skew(-2deg, -2deg);

}

.content h4{
  top: 60px;
  font-size: 3em;
  color: rgba(165, 37, 37, 0.527);
  transition: all 250ms ease-in;
  padding: 20px 10px;
}
.content p{
  font-size: 20px;
  transition: all 300ms ease-in;
  padding: 15px 20px;
}

.box:hover h4{
  transform: translateX(45px);
}
.box:hover p{
  transform: scale(1.009);
}

.box:hover{
  box-shadow: 100px, 100px, 100px, 100px;
}






/* Mix card styles */

/* .newContain{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 10px solid red;
  align-content: center;
  min-height: 450px;
}

.newBox{
  transition: all 500ms ease-in-out;
  background: #3b3b3b;
  border: 1px solid rgb(255, 255, 255);
  margin: 0;
  padding: 0;
  height: 100%;
} */

/* .newContain .newBox:before{
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(2deg, 2deg);
  z-index: -1;
  
}

.newContain .newBox:before{
  background: linear-gradient(100deg, #0b4046, #bd038e);
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
} */

.cardContent{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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

    .card p{
      font-size: 18px;
    }
</style>