<template>
<div>
  <b-card-group columns>
    
    <b-card 
      
      v-bind:img-src="road"
      img-alt="Image"
      img-top
      id="blogCard"
    >
      <h4>Why Traveling Gives Me Motivation</h4>
      <b-card-text>
        I am a competative person. I'm not sure if I mistake being competative 
        with simply just egar to prove myself. I've noticed that when I travel, 
        mostly just to visit family, I tend to get some kind of burst of 
        motivation about halfway through the trip.
        I think, for me at least, it has to do with seeing people I haven't seen in 
        a long time. Often we talk about where we are in life, and if I don't feel 
        like I am ahead of them then I tend to feel terribly behind. Nonetheless 
        motivation is motivation, wherever it comes from. 
      </b-card-text>
      <b-card-text class="small text">01/07/2020 </b-card-text>
    </b-card>

    <b-card text-variant="black" id="blogCard">
      <blockquote class="card-blockquote">
        <p>I like to think of adults more as resources. Resources of old reusable knowledge.</p>
          <b-card-text class="small text">01/21/2020 </b-card-text>
      </blockquote>
    </b-card>


    <b-card title="Why I Like Vue.js For This Website" id="blogCard"
    v-bind:img-src="vue" img-alt="Image" img-top>
      <b-card-text>
        Vue was first introduced to me in a JavaScript class I took in 2019.
        However I was only introduced to the smallest portion of Vue, the one where
        I simply plop the link into my index.html page and use it. When I found 
        out about the Vue CLI and how much more it had to offer I decided to give 
        it a try. I have never built my own personal website before. Just like cold water 
        hitting me in the face, I knew that oportunity was calling me out. So I went to work.
        I have much more to learn as far as web development goes, but as far as Vue goes,
        I will always keep it in my back pocket ready for other projects like this one.
      </b-card-text>
      <b-card-text class="small text">01/08/2020 </b-card-text>
    </b-card>

    



    <b-card id="blogCard">
      <blockquote class="blockquote mb-0">
        <p>
          Imposter syndrome is the worst enemy to anyone trying to be successful. Honestly 
          I just don't have time for it. I know what I know. If I don't, then suddenly I want to. 
        </p>
        <b-card-text class="small text">01/17/2020 </b-card-text>
      </blockquote>
    </b-card>

    

    <b-card id="blogCard">
      <h4>Communication Matters</h4>
      <b-card-text>
        Sometimes I think people underestimate the ability to simply make friends
        or acquaintances, especially in development. I can't tell you how many times
        just asking a friend for some help on problems has paid off. Just asking has always 
        gotten me the answers I need. In some cases even, asking questions has gotten me answers 
        to questions that I would probably have in the future.
      </b-card-text>
      <b-card-text class="small text">01/08/2020</b-card-text>
    </b-card>



    <b-card v-bind:img-src="bulb" 
    id="blogCard"
    img-alt="Image" img-top>
      <h4>Thinking Critically, I Think?</h4>
      <b-card-text>
        After reading several articles about what "Critical Thinking"
        is I kept asking myself, "but what does this mean for me?". Critical thinking, for 
        me is being able to come up with answers in a creative way and on the spot. What I mean by this
        is not that you shouldn't ask questions, but to just not ask repeating questions.
        I hate asking questions that I know I've already heard the answer before.
        Just take what you know and figure out your own answer to the question. 
        I'm not perfect at this but in the future I think I'll be thinking more critical on it.
      </b-card-text>
      <template v-slot:footer>
        <small class="text">1/21/2020</small>
      </template>
    </b-card>


    <b-card v-bind:img-src="code" 
    id="blogCard"
    img-alt="Image" img-top>
      <h4>How Did I Know That I Wanted to Code?</h4>
      <b-card-text>
        In high school I was introduced to tech as a career. However, 
        there are different places you can go in tech. When I first started 
        college obviously, I didn’t know what I wanted to do. I put myself 
        in a degree that would teach me to become a network administrator, 
        because it was “techy”. On the first day of classes I knew it wasn’t 
        right for me. I suppose I didn’t know as much as I just had a gut feeling. 
        I decided about halfway through the semester that I would switch to a 
        Computer Science Degree instead. I started taking some online tutorial's 
        in my free time and then by the time I started in my computer 
        science degree I was hooked. My point in all this is that sometimes we 
        follow career paths for the wrong reasons. I think a lot of people know 
        what they want to do, they just don’t admit it to themselves before its 
        too late and life hits. Admit it to yourself, for yourself.
      </b-card-text>
      <template v-slot:footer>
        <small class="text">1/26/2020</small>
      </template>
    </b-card>

  </b-card-group>
</div>
</template>

<script>
import road from '../assets/road.jpg';
import vue from '../assets/vue.jpg';
import bulb from '../assets/bulb.jpeg';
import code from '../assets/code.jpg';

export default {
  name: 'blog',
  data(){
    return{
      road,
      vue,
      bulb,
      code
    }
  }

}
</script>

<style >
  

  .card p{
    font-size: 18px;
    line-height: 1.6em;
  }
  .card-columns{
    padding: 50px 0;
    column-gap: 40px;
    margin-top: 1rem;
    margin-left: 5%;
    width: 90%;
    padding-bottom: 35px;

  }

  #blogCard{
    transition: all 300ms ease-in;
    border: none;
    margin: 1.5rem 0;
    background: rgb(131, 131, 131);
    box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.75),
        -10px -10px 14px 0 rgba(78, 78, 78, 0.548);

  }


  .text{
    color:rgb(255, 255, 255);
  }




  #blogCard:hover{
      transform: scale(1.02);
    }


@media screen and (max-width: 1024px){

  .card-columns{
    column-count: 2;
  }

  
  
}

@media screen and (max-width: 650px) {
  .card-columns{
    column-count: 1;
  }

  #blogCard:hover{
    transform: scale(1);
  }
}

</style>

