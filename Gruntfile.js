var util = require('util'),
    path = require('path'),
    fs   = require('fs'),
    _    = require('lodash'),
    exec = require('child_process').execSync;


module.exports = function (grunt) {

    var config = {
        clean: {
            all        : {src: ['demo', 'build', 'dist']},
            demo       : {src: 'demo'},
            demo_styles: {src: 'demo/css'},
            demo_views : {src: 'demo/**/*.html'},
            build      : {src: 'build'},
            dist       : {src: 'dist'}
        },
        copy: {
            bower: {  files: [{expand: true, cwd: 'bower_components', src: '**/*', dest: 'demo/plugins'}] }

        },
        jade : {
            options: {pretty: true,},
            demo   : {
                files: [{expand: true, cwd: 'src-demo/views', src: ['**/*.jade', '!**/_*.jade'], ext: '.html', dest: 'demo'}]
            }
        },
        sass : {
            demo : {
                options: {sourceMap: true, style: 'expanded'},
                files  : {
                    'demo/css/demo.css'                         : 'src-demo/styles/demo.scss',
                    'demo/css/bootstrap-advanced-dropdown.css'  : 'src/styles/bootstrap-advanced-dropdown.scss',
                    'demo/css/themes/dropdown-theme-default.css': 'src/styles/themes/dropdown-theme-default.scss'
                }
            },
            build: {
                options: {sourceMap: false, style: 'expanded'},
                files  : {
                    'build/bootstrap-advanced-dropdown.css'  : 'src/styles/bootstrap-advanced-dropdown.scss',
                    'build/themes/dropdown-theme-default.css': 'src/styles/themes/dropdown-theme-default.scss'
                }
            },
            dist : {
                options: {sourceMap: false, style: 'compressed'},
                files  : {
                    'dist/bootstrap-advanced-dropdown.min.css'  : 'src/styles/bootstrap-advanced-dropdown.scss',
                    'dist/themes/dropdown-theme-default.min.css': 'src/styles/themes/dropdown-theme-default.scss'
                }
            }
        },
        watch: {
            options        : {livereload: true},
            demo_views     : {files: ['src-demo/views/**/*.jade', '!src-demo/views/**/_*.jade'], tasks: ['newer:jade:demo']},
            demo_base_views: {files: ['src-demo/views/**/_*.jade'], tasks: ['clean:demo_views', 'jade:demo']},
            demo_styles    : {files: ['src/styles/**/*.scss', 'src-demo/styles/**/*.scss'], tasks: ['clean:demo_styles', 'sass:demo']},
            livereload     : {files: ['demo/**/*']}
        }
    };


    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig(config);

    grunt.registerTask('demo', ['clean:demo', 'sass:demo', 'jade:demo', 'copy:bower']);
    grunt.registerTask('build', ['clean:all', 'demo', 'sass:build', 'sass:dist']);
};
