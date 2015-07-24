

//BUGFIX kinda: Gulp has a problem with crashing on an error making it super annoying to move on with a project.  This function allows Gulp to keep going despite the error and will even spit the reason to the current log!
function keepGoing (error){
	console.log(error.toString());
	this.emit('end');
}
// Loading the plugins
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifiy = require('gulp-minify-css'),
combineMq = require('gulp-combine-mq'),
notify = require ('gulp-notify'),
sourceMaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create(),
reload = browserSync.reload;
//Notify variable 

gulp.task('server', ['styles'], function(){
	// Starts Browser sync
	browserSync.init({
			// Opens my project in google chrome.  This can be adapted into an object allowing you to open whatever browsers you want
			browser: "google chrome",
			server: {
				baseDir: "./"
			}
			});
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch("./*.html").on('change', reload);
	})

//Start Sass tasks
gulp.task('styles', function(){
	gulp.src('sass/**/*.scss')
	// Start gulp sourceMaps
	.pipe(sourceMaps.init())
	// Start sass allowing errors to be logged to the terminal window
	//Allows gulp to continue despite making errors
	.pipe(sass({
		errLogToContole: true
		}))
	.on('error', keepGoing)
	//Adds vendor prefixes to code if needed.
	.pipe(autoprefixer({
		browsers:['last 7 versions']
		}))
	//Minifies Css file
	.pipe(minifiy())
	//Will write a source map when sass is recompiled
	.pipe(sourceMaps.write('maps'))
	//Notify changes are complete 
	.pipe(notify({
		message: "Generated file: <%= file.relative %> @ <%= options.date %>",
		templateOptions: {
			date: new Date()
		}
		}))
	//Compiles into the css folder
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
	});
	//Watcher
	gulp.task('default', ['server']);
	gulp.task('combineMq', function(){
		return gulp.src('./css/main.css')
		.pipe(combineMq({
			beautify:false
			}))
		.pipe(gulp.dest('tmp'));
		});

