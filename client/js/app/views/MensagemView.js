class MensagemView extends View{
    /*
    Metodo Construtor
    */
    constructor(elemento){
        super(elemento);
    }
    /*
    Metodos
    */
    template(model){
        /*
        Condicional, Se a string for vazia retornará sem a classe,
        caso contrario retornara um P com a classe de alerta
        */
        if(model.texto == ""){
            return '<p></p> '
        }        
        else{
            
            return `<p class="alert alert-info">${model.texto}</p>`;
        }
    }

}