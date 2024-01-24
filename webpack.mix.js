let mix = require('laravel-mix');

mix
  .js('src/js/app.js', 'assets/') // creates 'dist/app.css'
  .sass('src/scss/app.scss', 'assets/'); // creates 'dist/forum.css'
