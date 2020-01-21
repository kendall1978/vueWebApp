<template>
  <div>
    <b-card-group deck>
      <b-card 
        title="The Movie DB API call"
        img-src="https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8_400x400.jpg"
        img-alt="Image"
        img-top
        style="width: 20%; "
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
        style="width: 20%;"
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

    <b-row>
      <b-col>
        <h1>The Movie DB API call</h1>
        <p>In this project I am making a call to the Movie DB 
          and collecting on around 200 or so movies. From there then 
          im practicing some techniques that you might see in other 
          movie information websites.</p>
        <b-button to="/apiExample">Movies</b-button>
      </b-col>
      <b-col>
        <img src="https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8_400x400.jpg" alt="The Movie DB">
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <img src="https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8_400x400.jpg" alt="The Movie DB">
      </b-col>
      <b-col>
        <h1>The Movie DB API call</h1>
        <p>In this project I am making a call to the Movie DB 
          and collecting on around 200 or so movies. From there then 
          im practicing some techniques that you might see in other 
          movie information websites.</p>
        <b-button to="/apiExample">Movies</b-button>
      </b-col>
      
    </b-row>



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