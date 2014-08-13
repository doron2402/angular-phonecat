module.exports = function(config){
  config.set({
<<<<<<< HEAD:test/karma.conf.js

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
=======
    basePath : '../',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01:config/karma.conf.js
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
<<<<<<< HEAD:test/karma.conf.js

  });
};
=======
  });
};
>>>>>>> 3da7f8c9a03119a99925345aa4568021eb9a8a01:config/karma.conf.js
