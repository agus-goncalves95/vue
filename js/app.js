var app = new Vue({
    el: '#app',
    data: {
        numeroClick: 0
   },
    methods: {
        sumarClick(){
            this.numeroClick = this.numeroClick + 1
        },
        restarClick(){
            this.numeroClick = this.numeroClick - 1
        }
    },
    computed: {
    }
 });
    
 