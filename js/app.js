var app = new Vue({
    el: '#app',
    data: {
        tareas: [
            {
                titulo: "Pasear a spock",
                description: "Ir al parque"
            },
            {
                titulo: "Regar plantas",
                description: "Revisar las macetas grandes"
            }
        ],
        // Para poder acceder a ellas hay que referenciarlas primero vacias
        inputTitulo: " ",
        inputDescription: " ",
        alerta: false,
        // La declaramos vacia para desp ponerle el valor y usarla en el index
        textoAlerta: " "
   },
    methods: {
        agregarTarea() {
            const newTarea = {
                // Debe ser igual a las tareas del data el titulo description
                titulo: this.inputTitulo,
                description: this.inputDescription
            }
            // Lo vamos a pushear al array de tareas
            this.tareas.push(newTarea);
            this.mostrarAlerta("Tarea agregada")
            // Vaciar el input desp de una tarea
            this.inputTitulo = " ";
            this.inputDescription = " ";
            // Para que vuelva el foco el input .. ref referecncias de la pagina
            this.$refs.titulo.focus();
        },
            mostrarAlerta(texto){
            // Cuando se agrega una funcion alerta pasa a ser true
            // programamos que despues de 3 segundo se ponga en false
            // Trasnforma el string vacio en el parametro de texto puesto
            this.textoAlerta = texto
            this.alerta = true
            setTimeout(() => {
                this.alerta = false
            }, 3000)
        },
        // Funcion para eliminar un elemento del array mediante el indice i 
        eliminarTarea(i){
            this.tareas.splice(i,1)
            this.mostrarAlerta("Tarea eliminada")
        }
    },
    computed: {
        // Hay que crear una variable que va estar computada
        // y va a contar la cantidad de taras con el length
        cantidadTareas(){
            return this.tareas.length
        }
    },
    // // PARA GUARDAR INFO EN EL STORAGE
    // watch: {
    //     tareas() {
    //         // Transformo el array de tareas en un string
    //         localStorage.setItem("tareas", JSON.stringify(this.tareas))
    //     }
    // },
    // // Ciclos de vida de los componentes cuando se ejecuten 
    // mounted() {
    //     const itemsEnLocalStorage = localStorage.getItem("tareas")
    //     if(itemsEnLocalStorage) {
    //         // lo transformo el string en un array de nuevo
    //         this.tareas = JSON.parse(itemsEnLocalStorage)
    //     }
    // }
 });
    
 