<template>
  <div>
    <div v-for="project in projectCards" :key="project.id"> 
      <b-card  :title="project.title" >
        <h6>{{project.subTitle}}
        </h6>
        <b-card-text>
          {{project.summary}}
        </b-card-text>

        <b-card-text>{{project.description}}</b-card-text>

        <a href="#" class="card-link">{{project.linkTitle}}</a>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'projects',
  data(){
    return{
      projectCards: [
        {
          id: 1,
          title: "Angular",
          subTitle: "The MovieDB API",
          summary: "This is the first project I built that used any kind of framework. Angular was very fun and challenging. I do plan to do more projects in Angular in the future. I do believe know Typescript well is good for every web developer. Typscript I beleive will be huge in the future of Web development not just in the Angular framework.",
          description: "In this project I simply set up 3 different pages. One as the homepage and the other 2 were different API calls withing the same database. Click the link below to check it out.",
          linkTitle: "Angular and API's"
        },
        {
          id: 2,
          title: "School Work",
          subTitle: "Small projects I've done while at OTC",
          summary: "You'll find a ton of different things to look at in this repository. Everything from the very basics in HTML and CSS to small python projects and javascript. ",
          description: "This is a great place to see my progress as a developer and how far I've come.",
          linkTitle: "Github Classwork"
        },
        {
          id: 3,
          title: "Vigil's Construction",
          subTitle: "In progress",
          summary: "A family owned construction business. A real world project to help better my skills as a developer. Im still in the beginning stages of this website but I'll put a link in here as soon as its live. ",
          description: "",
          linkTitle: ""
        }
      ]
    }
  },
  mounted(){
    
  }
}

// API Key 20bfc965866b0ec559f49175ca7f097a
</script>

<style scoped>


.card-link{
  color:rgb(36, 37, 39);
  transition: all 250ms ease-in;

}
.card-link:hover{
  color: whitesmoke;
}
.card-body h6{
  color:rgb(36, 37, 39); 
}


.card{
  width: 80vw;
  height: 100%;
  margin-left: 8.9vw;
  margin-top: 35px;
  padding: 20px 20px;
  background: rgb(131,131,131);
  color:rgb(36, 37, 39);
}

</style>