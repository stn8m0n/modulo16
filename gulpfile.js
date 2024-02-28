const gulp = require('gulp');

function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executado, via Gulp"); //subir linha de comando, Alt + direciona pra cima.
        callback();
    },2000);
}


function dizOi(callback){
    setTimeout (function(){
        console.log("Olá, Gulp");
        dizTchau();
        callback();

    }, 1000);
}

function dizTchau(){
    console.log("Tchau, Gulp"); //tarefas privadas não são exportadas mas são executadas atravez de outras.
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;