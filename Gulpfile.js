const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task("compile", function () {
  const tsProject = ts.createProject("tsconfig.json");
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("src/**/*.ts", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile", "watch"));
