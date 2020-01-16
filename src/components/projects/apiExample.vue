<template>
  <div>
    <div class="myContainer">
      <div v-for="item in allMovies[0]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[1]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[2]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[3]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[4]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[5]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[6]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[7]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[8]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
      <div v-for="item in allMovies[9]" v-bind:key="item.id" class="myCard">
        <img v-bind:src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+item.poster_path'>
        <h1>{{item.title}}</h1>
        <p>{{item.overview | truncate(150, '...')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
//<!--v-bind:img-src=""-->
//<!-- v-bind:img-src='"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movies[0].results[0].poster_path' -->
import axios from 'axios';
// import Vue from 'vue';
// Vue.filter('truncate', function(text, stop, clamp){
//   return text.slice(0, stop)+ (stop < text.length ? clamp || '...' : '')
// });

export default {
  name: 'apiExample',
    data(){
    return{
      movies: [],
      movieNumbers: [1,2,3,4,5,6,7,8,9,10],
      i: null,
      j: null,
      allMovies: [],
      imgNum: []
    }
  },
  async created(){
        for(this.i = 0; this.i < this.movieNumbers.length; this.i++){
          try{
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&primary_release_date.gte=2016-01-01&include_adult=false&include_video=false&page='+this.movieNumbers[this.i]);
            this.movies.push(res.data);
          // for(this.j = 0; this.j < this.movies.length; this.j++){
          //   this.allMovies.push(this.movies[0].results[])

          // }   
          }  catch (e){
            console.error(e);
          }
        }
        for(var j = 0; j < this.movies.length; j++){
          this.allMovies.push(this.movies[j].results)
        }
        
      console.log(this.movies)
      console.log(this.allMovies)
      // this.allMovies.push(this.movies[0].results[0],this.movies[0].results[1],
      // )
      //  try{
      //     const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&primary_release_date.gte=2015-01-01&include_adult=false&include_video=false&page=1_10');
      //     //primary_release_date.gte
      //     this.movies.push(res.data);
      //     console.log(this.movies)
          
      //   }   catch (e){
      //     console.error(e);
      //   }
      },
      filters:{
        truncate: function (text, length, suffix){
          return text.substring(0, length) + suffix;
        }
      }

      


}

</script>

<style>

.myCard img{
  width: 300px;
  height: 450px;

}
.myCard{
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  background-color: azure;
  border-radius: 25px;
  transition-duration: 400ms;
  transition-property: all;
  transition-timing-function: ease-in-out;
  


}

.myCard:hover{
    -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
    z-index: 1;  
    background-color: #02525b;
    color: #fea356;
    border: none;
    transform: scale(1.01);
}
.myCard h1{
  font-size: 18pt;
  text-align: center;
  width: 300px;
  height: auto;
  
}

.myCard p{
  font-size: 12pt;
  text-align: center;
  width: 300px;
  height: auto;
  padding: 1rem 2rem;
  
}

.myContainer {
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 20px 15px 0 15px;
  align-content: flex-start;
}


</style>