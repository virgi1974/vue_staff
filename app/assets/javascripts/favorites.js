var favorites = new Vue({
  el: '#favorites',
  data: {
    favorites: [],
    errors: {
    },
    editMode: false,
    favorite: {
    }
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
    },//ready

    createFavorite: function(){
      // editMode = true;
      var that = this;
      $.ajax({
        url: '/favorite',
        method: 'POST',
        data: {
          favorite: that.favorite,
        },
        dataType: 'json',
        success: function(res){
          alert("success");
          that.errors = {};
          that.favorite.url = '';
          that.favorite.short_description = '';
          that.favorite.long_description = '';
          that.favorites.push(res);
        },
        error: function(res){
          alert("error");
          that.errors = res.responseJSON.errors;
        }
      })
    }
    
  },//methods
  mounted(){
    this.ready();
  }

});

// component (global)
Vue.component('tr-favorite', {
  template: "#tr_component",
  props: ['data']
});