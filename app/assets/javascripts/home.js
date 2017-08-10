var vueInstance = new Vue({
  el: '#app',
  data: {
    nombre: "virgilio",
    user: {},
    favorites: []
  },
  methods: {
    ready: function(){
      var that = this;
      $.ajax({
        url: 'http://localhost:3000/',
        method: 'GET',
        dataType: "json",
        success: function(res){
          that.user = res.current_user;
          that.favorites = res.favorites;
        },
        error: function(xhr, status, error){
          alert('error');
          console.log(JSON.stringify(xhr.responseText));
          console.log(JSON.stringify(status));
          console.log(JSON.stringify(error));
        }
      });
    },//ready
    
  },//methods
  mounted(){
    this.ready();
  }

});
