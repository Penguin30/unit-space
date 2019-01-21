var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
    styles: {
        src: "src/scss/**/*.sass",
        dest: "src/css"
    }
};
function scss() {
    return (
        gulp
            .src("src/scss/**/*.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("src/css"))
    );
}
function watch(){
    gulp.watch('src/scss/**/*.scss', scss)
}
    
// Don't forget to expose the task!
exports.style = scss;
exports.watch = watch;
