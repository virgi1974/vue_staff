var favorites = new Vue({
  el: '#favorites',
  data: {
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
          that.favorites = res;
        },
        error: function(xhr, status, error){
          console.log(JSON.stringify(xhr.responseText));
          console.log(JSON.stringify(status));
          console.log(JSON.stringify(error));
        }
      });
    }//ready
    
  },//methods
  mounted(){
    this.ready();
  }

});