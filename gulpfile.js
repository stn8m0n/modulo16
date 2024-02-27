function funcaoPadrao(callback){
    console.log("Executado, via Gulp");
    callback();
}

function dizOi(callback){
    console.log("Olá, Gulp");
    dizTchau();
    callback();
}

function dizTchau(){
    console.log("Tchau, Gulp"); //tarefas privadas não são exportadas mas são executadas atravez de outras.
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;