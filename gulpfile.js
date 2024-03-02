const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/stylus'));
}

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
exports.sass = compilaSass;