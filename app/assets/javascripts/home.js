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
    mate: '',
    miBooleano: true,
    miUrl: 'http://virgilio.com',
    clase1: 'clase-1',
    clase2: 'clase-2',
    mensaje: ''
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

    miAccion: function(evt){
      evt.preventDefault();
      alert("normal behaviour for link has been changed");
    },
    
  },//methods
  mounted(){
    this.ready();
  }

});
