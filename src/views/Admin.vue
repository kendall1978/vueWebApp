<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Hello, {{ user.email }}!</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>


export default {
    name: 'admin',
    components: {

    },
    data(){
        return{
            toggleCreate: false,
            post: {
                title: undefined,
                content: undefined
            }
        }
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        posts(){
            return this.$store.state.posts
        }
    },
    methods: {
        togglePost (){
            this.toggleCreate = !this.toggleCreate
        },
        createPost(){
            this.$store.dispatch('createPost', this.post)
            this.post = {
                title: undefined,
                post: undefined
            }
            this.toggleCreate = !this.toggleCreate
        }
    }
}
</script>