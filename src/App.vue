<template>
  <div>
    <div class="aboveFooter">
      <b-navbar toggleable="lg" type="dark" style="background-color: #424c55">
        <b-navbar-brand style="color: #f5edf0;" href="/">
            Kendall Roberts
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
            <b-nav-item to="/projects">Projects</b-nav-item>
          </b-navbar-nav>

      <!-- Right aligned nav items -->
 
        </b-collapse>
      </b-navbar>
    
      <router-view></router-view>
    </div>
    <footer id="sticky-footer" style="background-color: #023040; 
    color: #36827c;">
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

  html{
    background-color: #fe7e41;
  }
  
  .aboveFooter{
    min-height: 100vh;
    background-color: #fe7e41;
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
