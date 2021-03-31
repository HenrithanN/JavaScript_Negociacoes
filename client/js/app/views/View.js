class View{
    /*
    Metodo Construtor
    */
    constructor(elemento){

        this._elemento = elemento;
    }

    template() {
        throw new Error("O Metodo Template deve ser Implementado");
    }
    /*
    Metodos
    */    
    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}