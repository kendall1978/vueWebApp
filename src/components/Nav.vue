<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
        <img src="../assets/KRlogo.png" id="bear" class="d-inline-block align-top" alt="Bear">
        Kendall Roberts
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Blog</b-nav-item>
        <b-nav-item href="#">Projects</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
 
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'nav',
  data(){
      return{

      }
  },
  props: {}
}
</script>


<style scoped>
    #bear{
        height: 35px;
        width: auto;
        padding-right: 10px;
    }
</style>