class Mensagem{
    /*
    Metodo Construtor
    */
    constructor(texto=""){

        this._texto = texto;
    }
    /*
    Propriedades
    */
    get texto() {
        return this._texto;
    }
    set texto(texto){
        this._texto = texto;
    }

}