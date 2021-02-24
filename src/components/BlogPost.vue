<template>
  <b-card-group columns>
    <b-card v-for="post in posts" v-bind:key="post.id"  
      id="blogCard"
      img-alt="Image" :img-src=post.imageUrl img-top>
      <h4>{{post.title}}</h4>
      <b-card-text>
        {{post.content}}
      </b-card-text>
      <template v-slot:footer>
        <small class="text">{{post.date}}</small>
      </template>
    </b-card>
  </b-card-group>
</template>

<script>
// import firebase from 'firebase';
export default {
  name: 'BlogPost',
  computed:{
    posts(){
      return this.$store.getters.getPosts
    }
  }
}
</script>
