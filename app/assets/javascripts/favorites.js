var favorites = new Vue({
  el: '#favorites',
  data: {
    favorites: [],
    errors: {
    },
    editMode: false,
    favorite: {
      url: '',
      short_description: '',
      long_description: ''
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

    showForm: function(favoriteId){
      editMode = true;
      alert(favoriteId);
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

});