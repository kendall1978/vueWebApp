<template>
  <div>
      <b-container fluid>              
        <b-card no-body class="overflow-hidden" style="max-width: 60%; border: none; margin-top: 5%; margin-left: 20%">
            <b-row no-gutters> 
              <b-col md="6"  >
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-circle" ></b-card-img>
              </b-col>
              <b-col md="6"> 
                <b-card-body title="Kendall Roberts">
                  <hr>
                  <b-card-text>
                    Hello, Im Kendall Roberts. I am an aspiring software engineer/web deveoper. Currently enrolled at Ozarks Technical Community                     
                    College hunting down that associate degree in Computer Information Science. Afterwards I hope to land a good job,                    
                    possibly with you. I fell in love with code and tech long ago working on a project far far away. Which leads me to my next                     
                    confession. I just so happen to be a mega nerd, but who isnt in this field right? I love Marvel, retro video games,                   
                    new video games, new tech and those juicy gaming PC builds. Anyways take a look around im constantly learning 
                    I just wanted to show off some of my skills with this website. Thanks!
                  </b-card-text>
                  <b-button variant="primary">Go somewhere</b-button>
                </b-card-body>
              </b-col>
            </b-row>
        </b-card>
      </b-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
      return{

      }
  },
  props: {}
}
</script>


<style scoped>
    body{
        display: flex; 
        flex-direction: column; 
        min-height: 100vh;
    }
    .rounded-circle{
        width: 400px;
        margin: 35px 25px 25px 25px;
    }

    .rounded-circle:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        z-index: 1;  
    }
</style>