


const { createApp } = Vue

var vm = createApp({
    data() {
      return {
       alunos: '',
      }
    },
    created: function() {
        axios.get('http://localhost:3000/listaAlunos')
            .then(function(response) {
                console.log(response.data)
                this.alunos = response.data;
            }.bind(this))
            .catch(function(error) {
                console.log(error);
            });
    }
}).mount('#app')
