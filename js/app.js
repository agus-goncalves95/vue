Vue.component("navbar", {
    props: ["subtitulo"],
    template: ` 
     <nav class="navbar navbar-light bg-light">
         <div class="container-fluid">
             <a class="navbar-brand" href="index.html">
                 <img src="https://w7.pngwing.com/pngs/485/93/png-transparent-fast-food-taco-hamburger-logo-shovel-food-text-hand.png" height="90" class="d-inline-block">
                 <span>Comidas al paso</span>
            </a>

            <span> {{ subtitulo }}</span>
            <a  class="navbar-brand" href="/servicios.html">Servicios</a>
        </div>
      </nav>`
 })

 Vue.component("banner", {
     props:{
        titulo: {
            type: String,
            default: "Somos lo que comemos"
        }
     },
     template: `
     <div class="banner">
        <h1>{{ titulo }}</h1>
     </div>
     `
 })

 Vue.component("card", {
     props: ["comida"],
     template: `
     <div class="card">
        <img :src="comida.portada"/>
        <div class="p-4">
        <h5>{{ comida.titulo }}</h5>
        <p> $ {{ comida.costo }}</p>
        <button class="btn btn-primary"> Comprar</button>
        </div>
     </div>
     `
 })


var app = new Vue({
    el: '#app',
    data: {
        comidas: [
            {
                id: 1,
                titulo: "Carne con papas", 
                costo: 100, 
                vencimiento: "20/12/2021",
                portada: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
            },
            {
                id: 2,
                titulo: "Hamburguesa con fritas", 
                costo: 200, 
                vencimiento: "12/04/2021",
                portada: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            },
            {   
                id: 3,
                titulo: "Salmon con finas hierbas", 
                costo: 300, 
                vencimiento: "04/09/2021",
                portada: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            },
            {   
                id: 4,
                titulo: "Entraña al chimichurri", 
                costo: 400, 
                vencimiento: "05/10/2021",
                portada: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            },
        ]
   },
 });
    
 