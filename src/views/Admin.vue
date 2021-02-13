<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Hello Kendall</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
          <b-list-group>
            <h3>Blog Posts</h3>
              <b-list-group-item v-for="post in blogPosts" v-bind:key="post.id"
              button>
                {{post.title}}
              </b-list-group-item>
          </b-list-group>
      </b-col>

    </b-row> 
    <b-button class="addButton" v-on:click="createPage"><i class="fas fa-plus"></i></b-button>


  </b-container>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'admin',
    components: {

    },
    data(){
        return{
            blogPosts: []
        }
    },
    computed: {

    },
    methods: {
        togglePost (){
            this.toggleCreate = !this.toggleCreate
        },
        createPage(){
            this.$router.replace({path: "/"});
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

<style scoped>
h2, h3, h1{
    color: rgb(131,131,131);
}
.addButton{
    background: rgb(36, 37, 39);
    color: rgb(131,131,131);
    font-size: 3em;
    border: none;
    margin: 20px auto;
    transition: all 300ms ease-in;
}

.addButton:hover{
    color: #e07a5f;
    transform: scale(1.5);
}

button{
    padding: 20px auto;
    margin: 10px auto;
}
</style>