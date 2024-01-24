let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const tailwindConfig = require('./tailwind.config');
mix
  .js('src/js/app.js', 'assets/') // creates 'dist/app.css'
  .sass('src/scss/app.scss', 'assets/') // creates 'dist/forum.css'
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  });
