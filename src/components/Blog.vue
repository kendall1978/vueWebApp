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



    <b-card header="Quote" id="blogCard">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
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



    <b-card img-src="https://marketingmatters.net/wp-content/uploads/2018/01/tech-focus-group.png" 
    id="blogCard"
    img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Footer Text</small>
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