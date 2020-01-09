<template>
  <div>
    <b-card-group columns>
      <b-card 
        title="IGDB API call"
        v-bind:img-src="info.background_image[1]"
        img-alt="Image"
        img-top
        id="blogCard"
      >
        <b-card-text>
            
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 01/08/2020 </b-card-text>
        <b-button>Show API</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
//import API from '../../API.js';

export default {
  name: 'apiExample',
  data(){
    return{

    }
  }

}

</script>

<style>

</style>