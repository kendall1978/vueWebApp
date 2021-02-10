<template>
  <!-- <b-card-group columns>
    <b-card v-for="post in blogPosts" v-bind:key="post.id" :img-src=post.imageUrl 
      id="blogCard"
      img-alt="Image" img-top>
      <h4>{{post.title}}</h4>
      <b-card-text>
        {{post.content}}
      </b-card-text>
      <template v-slot:footer>
        <small class="text">{{post.date}}</small>
      </template>
    </b-card>
  </b-card-group> -->
  <blog-post></blog-post>
</template>

<script>
import BlogPost from '../components/BlogPost';

export default {
  name: 'blog',
  components:{
    BlogPost
  }
}

</script>

<style>

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
    transition: all 200ms ease-in;
    border: none;
    margin: 1.5rem 0;
    background: rgb(131, 131, 131);
    box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.75),
        -10px -10px 14px 0 rgba(78, 78, 78, 0.548);

  }


  .text{
    color:rgb(255, 255, 255);
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

}

</style>

