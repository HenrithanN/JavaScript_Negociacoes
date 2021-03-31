class ListaDeNegociacoes{

    /*
    Construtor
    */
    constructor(){
        this._negociacoes = [];
    }

    /*
    Metodo
    */
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    /*
    Propriedade
    */
    get negociacoes(){
        return  [].concat(this._negociacoes);
    }
}