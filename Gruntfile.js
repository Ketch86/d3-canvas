module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: 'canvas/**/*.js',
				dest: '<%= pkg.name %>.js'
			}
		},
		uglify: {
			dist: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		},
		watch: {
			dist: {
				files: 'canvas/**/*.js',
				tasks: ['default']
			}
		}
	});

	grunt.registerTask('default', ['concat', 'uglify']);

	grunt.loadNpmTasks('grunt-contrib');
};
