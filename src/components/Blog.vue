<template>
<div>
  <b-card-group columns>
    <b-card 
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
      id="blogCard"
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card text-variant="black" id="blogCard">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>


    <b-card title="Title" id="blogCard"
    img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>



    <b-card header="Quote" id="blogCard">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card id="blogCard">
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>



    <b-card img-src="https://picsum.photos/400/200/?image=41" id="blogCard"
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

}
</script>

<style >
  
  .card-columns{
    padding: 2rem 0;
    column-gap: 1.5rem;
    margin-top: 1rem;
    margin-left: 6%;
    width: 88%;
    padding-bottom: 50px;

  }

  #blogCard{
    
  }




  #blogCard:hover{
        -webkit-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 10px 43px -12px rgba(0, 0, 0, 0.75); 
        z-index: 1;  
        background-color: aqua;
        border: none;
    }

</style>