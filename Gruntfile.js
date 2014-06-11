module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      build: {
        files: {
          "build/builded.css": "less/source.less"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};