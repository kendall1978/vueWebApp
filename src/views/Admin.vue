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
              <b-list-group-item v-for="post in posts" v-bind:key="post.id"
              button>
                {{post.title}} 
                <b-btn id="trash" v-on:click="deletePost(post.id, post)" ><i class="fas fa-trash"></i></b-btn>
              </b-list-group-item>
          </b-list-group>
      </b-col>

    </b-row> 
    <b-row>
      <b-col>
        <b-button class="addButton" v-on:click="createPage"><i class="fas fa-plus"></i></b-button>
      </b-col>
      <b-col><b-button class="signOutButton" v-on:click="signOut">LogOut</b-button></b-col>
    </b-row>
    



  </b-container>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'admin',
    computed: {
      posts(){
        return this.$store.getters.getPosts
      }
    },
    methods: {
        togglePost (){
            this.toggleCreate = !this.toggleCreate
        },
        createPage(){
            this.$router.replace({name: "create"});
        },
        signOut() {
        firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
      },
      deletePost(id, index){
        firebase.firestore().collection('blog-posts').doc(id).delete()
        this.$store.dispatch("deletePostAction", index)
      }
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

.signOutButton{
  margin: 30px auto;
  border-radius: 9px;
}

#trash{
  color: red;
  background-color: #fff;
  border: none;
  transition: 500ms ease-in-out;
}

#trash:hover{
  transform: scale(1.2);
}
</style>