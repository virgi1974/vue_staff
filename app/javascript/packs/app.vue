<!-- Esta es la aplicacion principal, aqui importaremos todos los componentes que hagan falta -->
<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
// ejemplo de importar el componente con el header
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Content from '../components/Content.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content
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
