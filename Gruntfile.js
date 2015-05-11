module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    sass: {
      dist: {
        options: {
          loadPath: require('node-bourbon').includePaths, // carga bourbon
          style:'compact' // Estilo de compilación
        },
        files: {
          'styles/styles.css': 'sass/styles.scss'
        }
      }
    },
    // concatena en 1 archivo
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/bootstrap/dist/js/bootstrap.min.js',
          './scripts/acciones.js'
        ],
        dest: 'scripts/acciones2.js'
      },
      // css: {
      //   src: ['./styles/bootstrap.min.css','./styles/styles.css'],
      //   dest: 'styles/styles2.css'
      // }
      //,
      // sass: {
      //   src: [
      //     './styles/*.css'          
      //   ],
      //   dest: './styles/styles2.css',
      // }
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      js: {
        files: {
          './scripts/acciones.js': './scripts/acciones2.js',
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['./*.php'],
      },
      js: {
        files: [
          //watched files
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/bootstrap/dist/js/bootstrap.min.js',
          './scripts/acciones.js'
          ],   
          tasks: ['concat:js'],       //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        sass: {
          options: {
            livereload: true
          },
          files: ['./sass/*.scss'],
          tasks: ['sass'],     
        },
        css: {
          options: {
            livereload: true
          },
          files: ['./styles/*.css'],  
        }
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Task definition
  grunt.registerTask('default', ['watch']);

};