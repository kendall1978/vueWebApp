import Vue from 'vue';
import axios from 'axios';
new Vue({
    data(){
        return{
            info: null
        }
    },
    mounted(){
        axios
        .get('https://rawg-video-games-database.p.rapidapi.com/developers/%7Bid%7D')
        .then(response => (this.info = response.data))
        .headers({
            "content-type":"application/octet-stream",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "d7727d5987msh950787fe21acfc7p1ed9d9jsn957ca8def9ae"
            })
        .catch(err => (this.info = err))
    }
})
