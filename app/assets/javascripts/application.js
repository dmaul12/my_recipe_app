// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function renderRecipe( recipe ) {
  var $container = $('#recipes');
  var $recipe = $('<li class="recipe">');
  var $name = $('<a target="_blank" href="' + recipe.href + '">')
  $name.text( recipe.title );
  var $ing = $('<li>').text(recipe.ingredients)

  var $img = $('<img>').attr('src', recipe.thumbnail)

  $recipe.append( $name );
  $recipe.append($img);
  $recipe.append('Ingredients',$ing);
  $container.append( $recipe );
}

function getRecipes() {
  $.getJSON('/recipes').done(function( recipes ) {
    recipes.results.forEach(function( recipe ) {
      renderRecipe( recipe );
    })
  })
}



$(function() {
  getRecipes();
})
