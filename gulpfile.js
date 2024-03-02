const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
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
exports.watch = function() {
    gulp.watch('./source/styles/*.scss',{ ignoreInitial:false}, gulp.series(compilaSass));
}