<template>
  <b-card-group columns>
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
  </b-card-group>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'BlogPost',
    data(){
    return{
      blogPosts: [],
      loading: true
    }
  },
    created() {
    firebase.firestore().collection('blog-posts').orderBy('date').get().then((querySnapshot)=>{
      this.loading = false
      querySnapshot.forEach((doc) => {
        const data = {
          'id' : doc.data().id,
          'title' : doc.data().title,
          'content' : doc.data().content,
          'date' : doc.data().date.toDate(),
          'imageUrl' : doc.data().imageUrl
        }
        this.blogPosts.push(data)

      })
    })
  }
}
</script>
