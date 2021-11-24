var app = new Vue({
    el: '#app',
    data: {
        numeroClick: 0,
        contador: 0,
   },
    methods: {
        sumarClick(){
            this.numeroClick ++
            this.contador ++
        },
        restarClick(){
            this.numeroClick --
            this.contador ++
        }
    },
    computed: {
    }
 });
    
 