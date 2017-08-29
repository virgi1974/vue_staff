Vue.component('greeting',{
  template: '<div><p>hola, usando componente en diferentes sitios</p></div>',
  data: function(){
    return {
      name: 'Virgi'
    }
  }
})

new Vue({
  el: '#vue-container-1',
  data: {
    instanceName: 'vue-container-1'
  }
})

new Vue({
  el: '#vue-container-2',
  data: {
    instanceName: 'vue-container-2'
  }
})