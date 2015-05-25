module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    // connect: {
    //   server: {
    //     options: {
    //       keepalive: true,
    //       livereload: true,
    //       port: 9001
    //     }
    //   }
    // },
    sass: {
      dist: {
        options: {
          loadPath: require('node-bourbon').includePaths, // carga bourbon
          style:'compact' // Estilo de compilación 
        },
        files: {
          'styles/styles.css' : 'sass/styles.scss' // destino : origen
        }
      }
    },
    // concatena en 1 archivo js
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      js: {
        files: {
          'scripts/a.js': ['scripts/*.min.js', 'scripts/*.js'],          
        }
      }
    },
    // concatena en 1 archivo
    concat: {
      options: {
        separator: ';',
      },
      // js: {
      //   src: ['./scripts/*.js','./scripts/*min.js'],        
      //   dest: 'scripts/minified.min.js'
      // },
      css: {
        src: ['./styles/*.css'],
        dest: 'styles/styles.concat.css'
      }      
    },      
    cssmin: {     
      target: {
        files: [{
          expand:true,
          cwd: 'styles/', // minifica todo dentro de esta carpeta
          src: ['styles.concat.css'], // minifica estas extenciones
          dest: 'styles/', // destino
          ext: '.min.css' // extension final
        }]
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
          './scripts/*.js'
          ],   
        // tasks: ['concat:js'],
        options: {
          livereload: true
          // reloads the browser
        }
      },
      sass: {
        options: {
          livereload: true
        },
        files: ['./sass/*.scss'],
        tasks: ['sass'],     
      }
      ,
      css: {
        options: {
          livereload: true
        },
        files: ['./styles/styles.css'],
        // tasks: ['concat:css']
      }      
    }
  });

  // Plugin loading
  // grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Task definition
  grunt.registerTask('reduce', ['uglify:js','concat:css', 'cssmin']);

  grunt.registerTask('default', ['watch']);
  // grunt.registerTask('serve', ['connect']);

};