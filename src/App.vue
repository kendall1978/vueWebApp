<template>
  <div>
    <app-nav></app-nav>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    'app-nav':Nav,
    'app-home':Home,
    'app-footer':Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Calistoga&display=swap');
  body{
    font-family: 'Calistoga', cursive;
  }
</style>
