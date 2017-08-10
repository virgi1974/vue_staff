var vueInstance = new Vue({
  el: '#app',
  data: {
    nombre: "virgilio",
    user: {},
    favorites: [],
    friends: [
      {nombre: 'David'},
      {nombre: 'Nacho'},
      {nombre: 'Miguel'},
      {nombre: 'Sergio'},
    ],
    mate: ''
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

    addFriend: function(mateName){
      this.friends.push({nombre: mateName});
      this.mate = '';
    },

    removeFriendFromList: function(friend){
      this.friends.pop(friend);
    },
    
  },//methods
  mounted(){
    this.ready();
  }

});
