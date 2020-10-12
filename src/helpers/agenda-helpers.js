const criarNovoId = (array) => {
    if (array.length > 0) {
        //Pegando o ID do elemento que ocupa a última posição e incrementando o valor 1 automaticamente
        return array[array.length - 1].id + 1 // array.length-1 representa a posição do último elemento
    } else {
        //Caso nosso array esteja vazio, o nosso elemento terá o ID = 1
        return 1
    }
}

module.exports = {criarNovoId}