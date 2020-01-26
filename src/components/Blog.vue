<template>
<div>
  <b-card-group columns>
    <b-card 
      title="Why Traveling Gives Me Motivation"
      v-bind:img-src="road"
      img-alt="Image"
      img-top
      id="blogCard"
    >
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
      <b-card-text class="small text-muted">Last updated 01/07/2020 </b-card-text>
    </b-card>

    <b-card text-variant="black" id="blogCard">
      <blockquote class="card-blockquote">
        <p>I like to think of adults more as resources. Resources of old reusable knowledge.</p>
        <footer>
          <b-card-text class="small text-muted">Last updated 01/21/2020 </b-card-text>
        </footer>
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
      <b-card-text class="small text-muted">Last updated 01/08/2020 </b-card-text>
    </b-card>



    <b-card id="blogCard">
      <blockquote class="blockquote mb-0">
        <p>
          Imposter syndrome is the worst enemy to anyone trying to be successful. Honestly 
          I just don't have time for it. I know what I know. If I don't, then suddenly I want to. 
        </p>
        <b-card-text class="small text-muted">Last updated 01/17/2020 </b-card-text>
      </blockquote>
    </b-card>

    <b-card id="blogCard">
      <b-card-title>Communication Matters</b-card-title>
      <b-card-text>
        Sometimes I think people underestimate the ability to simply make friends
        or acquaintances, especially in development. I can't tell you how many times
        just asking a friend for some help on problems has paid off. Just asking has always 
        gotten me the answers I need. In some cases even, asking questions has gotten me answers 
        to questions that I would probably have in the future.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 01/08/2020</b-card-text>
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
        <small class="text-muted">1/21/2020</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
import road from '../assets/road.jpg';
import vue from '../assets/vue.jpg';
import bulb from '../assets/bulb.jpeg';

export default {
  name: 'blog',
  data(){
    return{
      road,
      vue,
      bulb
    }
  }

}
</script>

<style >
  

  .card p{
    font-size: 18px;
  }
  .card-columns{
    padding: 50px 0;
    column-gap: 1.5rem;
    margin-top: 1rem;
    margin-left: 6%;
    width: 88%;
    padding-bottom: 35px;

  }

  #blogCard{
    transition-duration: 400ms;
    transition-property: box-shadow, background-color, transform;
    transition-timing-function: ease-in-out;
    border: none;
    margin: 1.5rem 1rem;

  }




  #blogCard:hover{
        box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.75),
        -10px -10px 14px 2px rgba(255, 255, 255, 0.75); 
        z-index: 1;  
        background-color: #02525b;
        color: #fea356;
        border: none;
    }

</style>