<template>
<div>
  <b-card-group columns>
    <b-card 
      title="Why traveling gives me motivation"
      v-bind:img-src="road"
      img-alt="Image"
      img-top
      id="blogCard"
    >
      <b-card-text>
        I am a competative person. Sometimes though I'm not sure 
        if I mistake being competative with simply just egar to prove myself.
        Regardless I've noticed that when I travel, mostly just to visit family,
        I tend to get some kind of burst of motivation about halfway through the trip.
        I think, for me at least, it has to do with seeing people I havnt seen in 
        a long time. Because we talk about where we are in life and if I don't feel 
        like I am ahead of them then I tend to feel terribly behind. Nonetheless 
        motivation is motivation, wherever yours comes from. 
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 01/07/2020 </b-card-text>
    </b-card>

    <b-card text-variant="black" id="blogCard">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>


    <b-card title="Why I choose Vue js For this website" id="blogCard"
    img-src="https://miro.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg" img-alt="Image" img-top>
      <b-card-text>
        Vue was first introduced to me in a JavaScript class I took back in 2019.
        However I was only introduced to the smallest portion of Vue. The one where
        you simply plop the link into your index.html page and use it. When I found 
        out about the Vue CLI and how much more it had to offer I decided I wanted to give 
        it a try. I have never built my own personal website before and I thought this was
        simply oportunity to learn more slapping me in the face. So I went to work.
        I have much more to learn as far as web development goes, but as far as Vue goes,
        I will always keep it in my back pocket ready for other projects like this one.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 01/08/2020 </b-card-text>
    </b-card>



    <b-card id="blogCard">
      <blockquote class="blockquote mb-0">
        <p>
          Imposter syndrome is the worst enemy to anyone trying to be successful. Honestly 
          I just don't have time for it. I know what I know, if I don't then suddenly
          I want to. 
        </p>
        <b-card-text class="small text-muted">Last updated 01/17/2020 </b-card-text>
      </blockquote>
    </b-card>

    <b-card id="blogCard">
      <b-card-title>Communication Matters</b-card-title>
      <b-card-text>
        Sometimes I think people underestimate the ability to simply make friends
        or acquaintances, especially in development. I can't tell you how many times
        just asking a friend for some help on problems I just didnt know alot about
         has not only gotten me to the solution of my problem, but also led me down 
         a rabbit hole of things to learn that I would never have thought about before.
        This is how life has shown me the the power of communication.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 01/08/2020</b-card-text>
    </b-card>



    <b-card img-src="https://miro.medium.com/max/1024/1*OZyk5CyE1_tdaoq4ljMZrg.jpeg" 
    id="blogCard"
    img-alt="Image" img-top>
      <h4>Thinking Critical, I think?</h4>
      <b-card-text>
        After going through and reading several articles about what "Critical Thinking"
        is I kept asking myself, "but what does this mean for me?". In my opinion,
        critical thinking at least for developers is just the idea of being about to
        come up with answers on your own and in your own creative way. What I mean by this
        is not that you shouldn't ask questions but to just not ask the same questions.
        I personally hate asking questions that I know I've already heard the answer before.
        Just take what you know and figure out your own answer to the question. 
        I'm not perfect at this but in the future I think i'll be thinking more critical on it.
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

export default {
  name: 'blog',
  data(){
    return{
      road
    }
  }

}
</script>

<style >
  
  .card-columns{
    padding: 2rem 0;
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
    margin-top: 1rem;
    margin-bottom: 2rem;

  }




  #blogCard:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        z-index: 1;  
        background-color: #02525b;
        color: #fea356;
        border: none;
        transform: scale(1.01);
    }

</style>