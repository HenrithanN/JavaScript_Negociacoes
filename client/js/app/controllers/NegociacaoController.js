class NegociacaoController {

    constructor (){
        /*
        Definindo Variaveis
         */
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data"); 
        this._inputQuantidade = $("#quantidade"); 
        this._inputvalor = $("#valor"); 
        /*
        Instancias
        */
        this._listaDeNegociacoes = new ListaDeNegociacoes();
        this.negociacoesView = new NegociacoesView($("#negociacoesView"));

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        /*
        Views
        */
        this.negociacoesView.update(this._listaDeNegociacoes);
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){
        /*
        Metodos Realizados ao Adicionar uma Negociacao
            1-Previne o evento padrao do Botao
            2-Adiciona uma Negociacao
            3-Limpa o Formulario
            4-Insere os dados da negociacao na Tabela
        */  
        event.preventDefault();      
        this._listaDeNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._mensagem.texto = "Negociacao adicionada com Sucesso!"
        this.negociacoesView.update(this._listaDeNegociacoes);
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        /*
        Criacao de uma Negociacao
        */
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputvalor.value
        );
    }

    _limpaFormulario(){
        /*
        Resetando o Formulario
        */
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputvalor.value = 0.0;
        this._inputData.focus();
    }
}