<!-- Esta es la aplicacion principal, aqui importaremos todos los componentes que hagan falta -->
<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
    <br>
    <!-- <app-navbar></app-navbar> -->
  </div>
</template>

<script>
// ejemplo de importar el componente con el header
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Content from '../components/Content.vue'

// import Navbar from '../components/Navbar'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content,
    // 'app-navbar': Navbar
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
