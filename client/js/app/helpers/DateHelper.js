class DateHelper{
    /*
    Construtor
    */
    constructor(){
        throw new Error ("Essa classe não pode ser Instanciada");
    }

    /*
    Metodos Estaticos
    */
    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
    }

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}$/.test(texto)){
            throw new Error ("Digite uma data no formato correto : aaaa/mm/dd")
        }
        return new Date(texto.split('-'));
    }    
}