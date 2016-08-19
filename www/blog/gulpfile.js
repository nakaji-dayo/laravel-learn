var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.js.browserify.transformers[0].options.stage = 0

elixir(function(mix) {
  mix.sass('app.scss')
//    .browserify('main.js')
    .babel('main.js');
});
