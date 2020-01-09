<template>
  <div>
    <b-card-group columns>
      <b-card 
        title="IGDB API call"
        img-src="https://theblogaboutwhatever.files.wordpress.com/2018/08/igdb.jpg"
        img-alt="Image"
        img-top
        id="blogCard"
      >
        <b-card-text>
          With this component I will display some small cards that show some 
          information I grabbed from the IGDB website using an API call. 
          I am also trying out axios for the first time, so don't judge.
          Hit the button below to try it out.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 01/08/2020 </b-card-text>
        <b-button to="/apiExample">Button</b-button>
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