<template>
  <div>
    <div class="aboveFooter">
      <b-navbar toggleable="lg" type="dark" style="background-color: rgb(36, 37, 39);">
        <b-navbar-brand href="/">
            <strong>Kendall Roberts</strong>
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
    <footer id="sticky-footer">
      <div class="container text-center">
        <h6><strong>Copyright &copy; Kendall Roberts</strong></h6>
        <div class="icons">
          <a href="https://github.com/kendall1978?tab=repositories">
          <i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kendall-roberts-1b8b3a171/">
          <i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/kendertsrondall">
          <i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/kendall_roberts49/">
          <i class="fab fa-instagram"></i></a>
        </div>
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
        
.aboveFooter{
  min-height: 100vh;
  background-color: rgb(36, 37, 39);
}

#sticky-footer{
  padding: 1rem 0 3rem 0;
  background: rgb(131, 131, 131);
  color: #351D2E;

}

.icons a{
  padding: 10px 10px;
  font-size: 5rem;
  color: #351D2E;
  transition: all 200ms ease-in;
}
.icons a:hover{
  color: rgba(10, 10, 10, 0.746);
}


</style>
