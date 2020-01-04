<template>
<div>
  <b-card-group class="cardGroup" columns>
    <b-card class="myCards"
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card header="Quote" class="myCards">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Title" class="myCards"
    img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white" class="myCards">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card class="myCards">
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>



    <b-card class="myCards" img-src="https://picsum.photos/400/200/?image=41" 
    img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>

<script>


export default {
  name: 'blog',
  components: {

  }
}
</script>

<style>
    .myCards{
        margin-bottom: 10%;

    }
    .myCards:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        z-index: 1;  
        background-color: aqua;
        border: none;
    }
    .cardGroup{
        margin-left: 7.5%;
        margin-top: 3% ; 
        margin-bottom: 3%;
        width: 85%;
    }

</style>