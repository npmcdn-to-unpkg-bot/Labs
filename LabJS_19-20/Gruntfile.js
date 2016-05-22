module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: ['js/src/*.js'],
		  dest: 'js/script.main.js'
		},
	},
	uglify: {
		my_target: {
		  files: {
			'js/script.main.min.js': ['js/script.main.js']
		  }
		}
	},
	cssmin: {
		options: {
		shorthandCompacting: false,
		roundingPrecision: -1
		},
		target: {
			files: {
			  'css/styles.min.css': ['css/*.css','!css/styles.min.css']
			}
		}
	},
	watch: {
		default: {
			// We watch and compile sass files as normal but don't live reload here
			files: ['scss/*.scss','js/src/*.js','css/*.css','!css/styles.min.css','!css/StyleSheet.css'],
			tasks: ['sass','concat','uglify','cssmin'],
		}
	},
	sass: {
		dist: {
			files: {
				'css/StyleSheet.css': 'scss/main.scss'
			}
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['concat', 'sass', 'uglify','cssmin']);

};