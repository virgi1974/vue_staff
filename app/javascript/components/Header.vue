<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'ejemplo de navegacion con componentes'
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    background: lightgreen;
    padding: 10px
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
