const app = Vue.createApp({
    data(){
        return {
            titulo: "Contador App con Vue",
            count: 0
        }
    },
    //Se crea el objeto methods para crear las funciones que se usaran en la pagina 
    methods:{
        disminucion(){
            this.count -=1; //tambien se puede realizar this.count -1
            //validamos si el metodo esta funcionando
            console.log("restar");
        },
        aumento(){
            this.count += 1;
            console.log("sumar");
        },
        //otros metodos usados
        modCount(parametroUno="add"){
            if(parametroUno == 'dis'){
                this.count -= 1;
            }
            else{
                this.count += 1;
            }
            
        },

    }

});
