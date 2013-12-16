/*global module*/
var ES6ModulesPaths = ['controllers/*.js', 'models/*.js', 'routes/*.js', 'views/*.js'];

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            pathto: {
                src: 'node_modules/express-map/lib/pathto.js',
                dest: 'tmp/pathto.js'
            }
        },
        transpile: {
            main: {
                type: "yui",
                files: [{
                    expand: true,
                    src: ES6ModulesPaths,
                    dest: 'tmp/'
                }]
            }
        },
        watch: {
            scripts: {
                files: ES6ModulesPaths,
                tasks: ['transpile'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-es6-module-transpiler');

    grunt.registerTask('default', ['copy', 'transpile']);

};
