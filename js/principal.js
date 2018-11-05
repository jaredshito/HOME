var app = new Vue({
    el : '#app',
    data : {
        Pendientes: [pendiente='',
            ],
        pendiente : '',
        search:'',
    },
    created: function () {
        
  
        // Register a global custom directive called `v-focus`
        Vue.directive('focus', {
          // When the bound element is inserted into the DOM...
          inserted: function (el) {
            // Focus the element  
            el.focus()
          }
        })
      },
    
    methods : {
        agregarPendiente: function(){
            if(this.pendiente != ""){
                this.Pendientes.push({Pendientes:this.pendiente})
            }
            else{
                alert('campo vacio')
            }

        },
        
        searchGoogle: function () {
            console.log("google");
            
            let goo = 'https://www.google.com/search?q=' + this.search;
            window.location = goo;
        }
    
    }
})