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
	}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};