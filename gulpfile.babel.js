import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import path from 'path';
import mkdirp from 'mkdirp';
import { Instrumenter } from 'isparta';
import child_process from 'child_process';

const $ = gulpLoadPlugins();
const SRC_DIR = './src';
const DST_DIR = './dist';
const TEST_DIR = './test';
const DEFAULT_PORT = '8080';
const MOCHA_GLOBALS = [
    "stub",
    "spy",
    "expect"
];

var nodeServer = path.join(DST_DIR, 'server.js');

// port defined in the environment takes precedence over the default port
var port = process.env.PORT || DEFAULT_PORT;

// Remove the built files
gulp.task('clean', function() {
    return del([DST_DIR]);
});

// Send a notification when JSHint fails,
// so that you know your changes didn't build
function jshintNotify(file) {
    if (!file.jshint) {
        return;
    }
    return file.jshint.success ? false : 'JSHint failed';
}

function jscsNotify(file) {
    if (!file.jscs) {
        return;
    }
    return file.jscs.success ? false : 'JSCS failed';
}

function createLintTask(taskName, files) {
    gulp.task(taskName, function() {
        return gulp.src(files)
            .pipe($.plumber())
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.notify(jshintNotify))
            .pipe($.jscs())
            .pipe($.jscs.reporter())
            .pipe($.notify(jscsNotify))
            .pipe($.jshint.reporter('fail'));
    });
}

// Lint our source code
createLintTask('lint-src', ['src/**/*.js'])

// Lint our test code
createLintTask('lint-test', ['test/**/*.js'])

// Build two versions of the library
gulp.task('build', ['lint-src', 'clean'], function() {

    // Create our output directory
    mkdirp.sync(DST_DIR);
    return gulp.src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.babel())
        .pipe(gulp.dest(DST_DIR));
});

// Run Yadda (acceptance) tests
gulp.task('test', ['lint-src', 'lint-test'], function() {
    // Invoke mocha with default arguments (tests: ./test/*.js, reporter: spec)
    var args = [
        './node_modules/mocha/bin/mocha',
        '--colors'
    ];

    var mocha = child_process.spawn('node', args);

    mocha.stdout.on('data', function(data) {
        process.stdout.write(data);
    });

    mocha.stderr.on('data', function(data) {
        process.stdout.write(data);
    });
});

// Run the server
gulp.task('serve', ['build'], function () {
    var nodeOptions = {
        script: nodeServer,
        watch: SRC_DIR,
        ext: 'js',
        tasks: ['build'],
        env: {
            'PORT': port
        }
    };

    return $.nodemon(nodeOptions)
        .on('start', function () {
            log('*** nodemon started');
        })
        .on('restart', function (ev) {
            log('*** nodemon restarted');
            log('files changed:' + ev);
        })
        .on('crash', function () {
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function () {
            log('*** nodemon exited cleanly');
        });
});

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof msg === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }
    else {
        $.util.log($.util.colors.blue(msg));
    }
}

// An alias of serve
gulp.task('default', ['serve']);
