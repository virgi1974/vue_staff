<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      copyright: 'Copyright 2017'
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    background: lightgreen;
    padding: 6px
  }
  p {
    color: #222;
    text-align: center;
  }
</style>