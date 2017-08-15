// Vue.http.interceptors.push({
//   request: function(request){
//     Vue.http.headers.common['X-CSRF-Token'] = $('[name="csrf-token"]').attr('content');
//     return request;
//   },
//   response: function(response){
//     return response;
//   }
// })

// var favorites = new Vue({
//   el: '#favorites',
//   data: {
//     showCreateForm: false,
//     favorites: [],
//     errors: {
//     },
//     favorite: {
//     }
//   },
//   methods: {
//     ready: function(){
//       var that = this;
//       $.ajax({
//         url: 'http://localhost:3000/',
//         method: 'GET',
//         dataType: "json",
//         success: function(res){
//           that.favorites = res;
//         },
//         error: function(xhr, status, error){
//           console.log(JSON.stringify(xhr.responseText));
//           console.log(JSON.stringify(status));
//           console.log(JSON.stringify(error));
//         }
//       });
//     },//ready

//     createFavorite: function(){
//       // var that = this;
//       // $.ajax({
//       //   url: '/favorite',
//       //   method: 'POST',
//       //   data: {
//       //     favorite: that.favorite,
//       //   },
//       //   dataType: 'json',
//       //   success: function(res){
//       //     console.log("success");
//       //     that.errors = {};
//       //     that.favorite.url = '';
//       //     that.favorite.short_description = '';
//       //     that.favorite.long_description = '';
//       //     that.showCreateForm = false;
//       //     that.favorites.push(res);
//       //   },
//       //   error: function(res){
//       //     console.log("error");
//       //     that.errors = res.responseJSON.errors;
//       //   }
//       // })

//       // using
//       var that = this;
//       this.$http.post('/favorite.json', { favorite: this.favorite }).then(
//             function(response) {
//               that.errors = {};
//               that.favorite = {};
//               that.favorites.push(response.data);
//             },
//             function(response) {
//               that.errors = response.data.errors
//             }
//           )
//     }
    
//   },//methods
//   mounted(){
//     this.ready();
//   }

// });

// // component (global)
// Vue.component('tr-favorite', {
//   template: "#tr_component",
//   props: ['data'],
//   data: function(){
//     return {
//       editMode: false,
//       errors: {}
//     }
//   },

//   methods: {
    
//     updateFavorite: function(){
//       var that = this;
//       $.ajax({
//         url: '/favorite/' + that.data.id + '.json',
//         method: 'PUT',
//         data: {
//           favorite: that.data,
//         },
//         dataType: 'json',
//         success: function(res){
//           console.log("success");
//           that.errors = {};
//           that.favorite = res;
//           that.editMode = false;
//         },
//         error: function(error){
//           console.log(error);
//         }
//       })
//     }, //updateFavorite

//     destroyFavorite: function(){
//       // debugger;
//       var that = this;
//       $.ajax({
//         method: 'DELETE',
//         url: '/favorite/' + that.data.id  + '.json',
//         success: function(res){
//           // debugger;
//           var index = that.$parent.$children.indexOf(that); 
//           that.$parent.$children.splice(index,1);
//         }
//       })
//     }
//   }
// });