var elixir = require('laravel-elixir');
require('laravel-elixir-pug');
require('laravel-elixir-stylus');
//require('laravel-elixir-stylus-bundle');
var nib = require('nib');
var axis = require('axis');
var postStylus = require('poststylus'); 
var rupture = require('rupture');
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

elixir(function(mix) {
    mix.pug({
	    blade:true,
	    pretty:true
    });
    //mix.stylusBundle();
    mix.stylus('app.styl' ,null , {use:[nib() , axis() , rupture(), postStylus(['lost', 'autoprefixer'])]});
});
