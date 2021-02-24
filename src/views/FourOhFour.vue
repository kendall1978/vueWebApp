<template>
  <div id="fourOhFour">
        <b-card
        title="404 Error"
        :img-src="boatPic.img"
        img-alt=""
        img-top
        class="mb-2"
        style="max-width: 60rem; "
        >
          <b-card-text>
            You might have tried to get to a page that doesnt exist.
            Click the link below to get yourself to the home page.
          </b-card-text>
          <router-link to="/">Go Home</router-link>
        </b-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: '404',
    data(){
        return{
            boatPic: null
        }
    },
    created(){
      const ref = firebase.firestore().collection('assets').doc('404Pic')
      ref.get()
      .then(snapshot => {
        console.log(snapshot.data)
          if(snapshot.exists){
            this.boatPic = snapshot.data()
          }else{
            console.log('Doesnt exist')
          }
      })
    }
}
</script>

<style scoped>
#fourOhFour{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
}

a{
    font-size: 30px;
    text-decoration: none;
    color: #81B29A;
    font-weight: 550;
    background-color: rgb(36, 37, 39);
    border: solid rgb(36, 37, 39) 5px;
    border-radius: 9px;
    transition: 370ms ease-in;

}

a:hover{
    background-color: #fff;
    color: #e07a5f;
    border: solid #fff 5px;
    
}

.card{
    background-color: rgb(131, 131, 131);
    box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.75),
        -10px -10px 14px 0 rgba(78, 78, 78, 0.548);
}


</style>