<template>
  <div>
    <b-card-group style="max-width: 100vw; display: flex; flex-direction: row;
    flex-wrap: wrap; justify-content: space-evenly; align-items: flex-start;
    align-content: flex-start;">
      <b-card 
        title="The Movie DB API call"
        img-src="https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8_400x400.jpg"
        img-alt="Image"
        img-top
        style="width: 40%; display: flex; flex-direction: column;
        max-height: 100vh;"
        id="blogCard"
      >
        <b-card-text>
          In this project I am making a call to the Movie DB and collecting 
          on around 200 or so movies. From there then im practicing some techniques 
          that you might see in other movie information websites.
        </b-card-text>
        <b-button to="/apiExample">Movies</b-button>
      </b-card>

      <b-card 
        title="Pong in Python"
        img-src="http://pong-2.com/icon-256.png"
        img-alt="Image"
        img-top
        style="width: 40%; display: flex; flex-direction: column;"
        id="blogCard"
      >
        <b-card-text>
          In this project I am making a call to the Movie DB and collecting 
          on around 200 or so movies. From there then im practicing some techniques 
          that you might see in other movie information websites.
        </b-card-text>
        <b-button to="/apiExample">Movies</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>

export default {
  name: 'projects',
  data(){
    return{
    }
  },
  mounted(){
    
  }
}

// API Key 20bfc965866b0ec559f49175ca7f097a
</script>

<style>

</style>