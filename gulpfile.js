var 
		gulp 							= require('gulp'),
		concat 						= require('gulp-concat'),
		uglify 						= require('gulp-uglify'),
		rename 						= require('gulp-rename'),
		notify 						= require('gulp-notify'),
		clean 						= require('gulp-clean'),

		nib								= require('nib'),
		jeet							= require('jeet'),
		rupture						= require('rupture'),

		jade 							= require ('gulp-jade'),
		stylus 						= require('gulp-stylus'),
		plumber 					= require('gulp-plumber'),

		watch 						= require('gulp-watch'),
		livereload 				= require('gulp-livereload'),
		connect 					= require('gulp-connect'),
		lr 								= require('tiny-lr'),
		server 						= lr();


// Clean
// gulp.task('clean', function() {
// return gulp.src(['./dist/assets/css/*.css','./dist/*.html'], {read: false})
// 	.pipe(clean({force: true}));
// });


// Lint Task
// gulp.task('lint', function() {
// 		return gulp.src('./src/scripts/*.js')
// 				.pipe(jshint())
// 				.pipe(jshint.reporter('default'));
// });

// JS
gulp.task('scripts', function() {
	return gulp.src([
		'./src/styles/core/components/formplate/formplate.js',

		'./src/scripts/main.js'
		])
		.pipe(concat('./dist/assets/js/script.js'))
		.pipe(rename('main.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./dist/assets/js/'))
		.pipe(plumber())
		.pipe(livereload());
});
// HTML
gulp.task("jade", function() {
	return gulp.src("./src/templates/*.jade")
		.pipe(jade({
				pretty: ' '
		})).on("error", notify.onError()).on("error", function(err) {
				return console.log("Error:", err);
		})
		.pipe(gulp.dest("./dist"))
		.pipe(livereload());
});

// CSS
gulp.task('stylus', function () {
	return gulp.src('./src/site/index.styl')
		.pipe(stylus({use: [nib(), jeet(), rupture()],'include css': true }))
		.pipe(gulp.dest('./dist/assets/css'))
		.pipe(notify("Style Gulp!"))
		.pipe(plumber())
		.pipe(livereload());
});






//-------------
//- LIVERELOAD
//------------- 
gulp.task('connect', function() {
	connect.server({
		root: './dist/',
		port: 8000
	});
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/**/*.styl', ['stylus']);
	gulp.watch('./src/templates/*.jade', ['jade']);
	gulp.watch('./src/scripts/*.js', ['scripts']);
	gulp.watch(['./dist/**']).on('change', livereload.changed);
});

// Default task
gulp.task('default', function() {
		gulp.run('watch');
		gulp.start('scripts','stylus','jade','connect');
		livereload.listen();
});

// gulp.watch('src/styles/**/*.styl', ['stylus']); - gulp.watch(['dist/**']).on('change', livereload.changed);













