<template>
  <div>
    <div class="aboveFooter">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="./assets/KRlogo.png" id="bear" class="d-inline-block align-top" alt="Bear">
            Kendall Roberts
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
            <b-nav-item href="#">Projects</b-nav-item>
          </b-navbar-nav>

      <!-- Right aligned nav items -->
 
        </b-collapse>
      </b-navbar>
    
      <router-view></router-view>
    </div>
    <footer id="sticky-footer">
      <div class="container text-center">
        <small>Copyright &copy; Kendall Roberts</small>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
    }
  }
}
</script>

<style>
  body{
    font-family: 'Varela Round', sans-serif;
  }
  
  .aboveFooter{
    min-height: 100vh;
  }

    #sticky-footer{
      padding: 1rem 0 3rem 0;
    }

    #bear{
        height: 35px;
        width: auto;
        padding-right: 10px;
    }
</style>
