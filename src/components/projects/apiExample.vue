<template>
  <div>
    <input type="text" v-model="term" @input="search" placeholder="Search">
    <div class="myContainer">
        <div v-for="item in filteredMovies" :key="item.id" class="myCard">
          <img :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+item.poster_path" />
          <h1>{{item.title}}</h1>
          <p>{{item.overview | truncate(150, '...')}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&primary_release_date.gte=2016-01-01&include_adult=false&include_video=false&page='

export default {
  name: "apiExample",
  data() {
    return {
      movieNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      allMovies: [],
      filteredMovies: [],
      term: ''

    };
  },
  async created() {

    const requests = this.movieNumbers
      .map(num => `${baseUrl}${num}`)
      .map(url => axios.get(url));

    const responses = await Promise.all(requests);

    const moviePages = responses.map(res => res.data.results);

    moviePages.forEach(page => {
      this.allMovies.push(...page);
    });

    this.filteredMovies = this.allMovies;
  },
  filters: {
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  },
  methods: {
    search(){
      if(this.term === ''){
        this.filteredMovies = this.allMovies;
        return;
      }
      this.filteredMovies = this.allMovies
        .filter(movie => movie.title.toLowerCase().includes(this.term.toLowerCase()));

    }
  }
};
</script>

<style>
.myCard img {
  width: 300px;
  height: 450px;
}
.myCard {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  background-color: azure;
  border-radius: 25px;
  transition-duration: 400ms;
  transition-property: all;
  transition-timing-function: ease-in-out;
}

.myCard:hover {
  -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
  z-index: 1;
  background-color: #02525b;
  color: #fea356;
  border: none;
  transform: scale(1.01);
}
.myCard h1 {
  font-size: 18pt;
  text-align: center;
  width: 300px;
  height: auto;
}

.myCard p {
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