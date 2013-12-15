/**
 * jekyll-blog 开发环境
 * 
 * 大部分配置来源于yeoman
 *
 * 支持coffescript、javascript、less、sass等语法
 * 支持自动刷新
 * 支持代码压缩
 * 
 * Copyright (c) 2013 excalibur "刘真源", contributors
 * Licensed under the MIT license.
 */
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        coffee:'coffee',
        less:'less',
        sass:'sass',
        build:'app/assets',
        theme:'bootstrap3'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true
            },
            jekyll: {
                files:['<%= yeoman.app %>/**/*{.html,.htm,.md,}','!<%= yeoman.app %>/bower_components/**'],
                tasks: ['jekyll:dist']
            },
            coffee: {
                files: ['<%= yeoman.coffee %>/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.sass %>/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            less: {
                files: ['<%= yeoman.less %>/{,*/}*.less'],
                tasks: ['less:development']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.jkl/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '.tmp/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ]
            },
            jst: {
                files: [
                    '<%= yeoman.build %>/scripts/templates/*.ejs'
                ],
                tasks: ['jst']
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, '.jkl'),
                            mountFolder(connect, 'app/assets'),
							mountFolder(connect, 'app/bower_components')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, '.jkl'),
                            mountFolder(connect, 'app/assets'),
							mountFolder(connect, 'app/bower_components')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.jkl')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '.jkl','dist'],
            server: ['.tmp','.jkl']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.build %>/scripts/{,*/}*.js',
                '!<%= yeoman.build %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        /**
         * 编译coffeescript
         * @type {Object}
         */
        coffee: {
            development: {
                options:{
                    bare: true
                },
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.coffee %>',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            dist: {
        		options: {
			      join: true,
			      bare: true
			    },
			    files: {
			      '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/js/application.js': 
			  		['<%= yeoman.coffee %>/{,*/}*.coffee'] 
			    }
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        /**
         * 扩展less 编译 
         * 以_开头的不编译
         * 增加扫描less 路径
         * @type {Object}
         */
        less: {
            development: {
                options:{
                    paths:['<%= yeoman.less %>','<%= yeoman.app %>/bower_components']
                },
                expand: true,
                cwd: '<%= yeoman.less %>',
                src: ['{,*/}*.less','!{,*/}_*.less'],
                dest: '.tmp/styles',
                ext: '.css'
            },
            dist: {
                options:{
                    paths:['<%= yeoman.less %>','<%= yeoman.app %>/bower_components']
                    // yuicompress: true
                },
                 files: {
			      '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/css/excalibur.css': 
			      ['<%= yeoman.less %>/{,*/}*.less','!<%= yeoman.less %>/{,*/}_*.less']
			    }
            }
        },
       	
        /**
         * 编译sass、scss
         * @type {Object}
         */
        compass: {
            options: {
                sassDir: '<%= yeoman.sass %>',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/assets/themes/<%= yeoman.themes %>/images',
                javascriptsDir: '<%= yeoman.build %>/scripts',
                fontsDir: '<%= yeoman.build %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        /**
         * 编译jekyll模板 为了测试
         * @type {Object}
         */
        jekyll: {
            dist: {
                src: '<%= yeoman.app %>',
                dest: '.jkl',
                drafts:true
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        /**
         * 重新定位资源位置
         * @type {Object}
         * @see https://github.com/yeoman/grunt-usemin
         */
        useminPrepare: {
            html: '<%= yeoman.dist %>/{,**/}*.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,**/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/images'
                }]
            }
        },
        cssmin: {
        	 dist: {
                options:{
                    keepSpecialComments:0
                },
                expand: true,
			    cwd: '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/css',
			    src: ['{*,*/*}.css', '!{*,*/*}.min.css'],
			    dest: '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/css',
			    ext: '.min.css'
            }
            
        },
         uglify: {
	      options: {
	        banner: '<%= banner %>'
	      },
	      bootstrap: {
	        src: ['<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/js/application.js','<%= yeoman.app %>/bower_components/jquery-nicescroll/jquery.nicescroll.js'],
	        dest: '<%= yeoman.dist %>/assets/themes/<%= yeoman.theme %>/js/application.min.js'
	      }
	    },
        concat:{
        	 options: {
                banner: '<%= banner %><%= jqueryCheck %>',
                stripBanners: false
          },
          excalibur: {
            src: [
              '.tmp/scripts/{*,*/*}.js'
            ],
            dest: '<%= yeoman.dist %>/js/excalibur.min.js'
        	} 
    	},
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}'
                    ]
                }]
            },
            server:{
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/assets/themes/<%= yeoman.themes %>',
                    dest: '.tmp',
                    src: [
                        'images/{,*/}*.{webp,gif,png,jpg}',
                        'fonts/{,*/}*.{eot,svg,ttf,woff,otf}'
                    ]
                }]
            },
            jekyll:{
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '_drafts/{,*/}*.{html,htm,md}',
                        '_includes/**',
                        '_layouts/{,*/}*.{html,htm,md}',
                        '_posts/{,*/}*.{html,htm,md}',
                        '!_plugins/**',
                        'assets/themes/<%= yeoman.theme %>/**/*',
                        'images/{,*/}*.*',
                        '*.*',

                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        }
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        } else if (target === 'test') {
            return grunt.task.run([
                'clean:server',
                'coffee:development',
                'createDefaultTemplate',
                'jst',
                'compass:server',
                'connect:test:keepalive'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'jekyll:dist',
            'copy:server',
            'coffee:development',
            'createDefaultTemplate',
            'less:development',
            'compass:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'coffee',
        'createDefaultTemplate',
        'compass',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'coffee:dist',
        'less:dist',
        'createDefaultTemplate',
        'compass:dist',
        'useminPrepare',
        // 'imagemin',
        // 'concat',
        'cssmin',
        'uglify',
        'copy:jekyll',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
