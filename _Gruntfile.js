module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

      // Task configuration
    sass: {
      dist: {
        files: {
          'styles/styles.css': 'sass/styles.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/bootstrap/dist/js/bootstrap.min.js',
          './scripts/acciones.js'
        ],
        dest: 'scripts/acciones2.js'
      }
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
      frontend: {
        files: {
          './scripts/acciones.js': './scripts/acciones2.js',
        }
      }
    },
    watch: {
        js_frontend: {
          files: [
            //watched files
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './scripts/acciones.js'
            ],   
          tasks: ['concat:js_frontend'],       //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        sass: {
          files: [
            './sass/*.scss'
          ],            
          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          },        
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