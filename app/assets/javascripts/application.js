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
// $document.ready{}
function renderRecipe( recipe ) {
  var $container = $('#recipes');
  var $recipe    = $('<li class="recipe">');
  var $name      = $('<a target="_blank" href="' + recipe.href + '">')
  $name.text( recipe.title );

  var $ing       = $('<li>').text(recipe.ingredients)
  var $img       = $('<img>').attr('src', recipe.thumbnail)
  var $save      =$('<button class="save">').text("Save Recipe")

  $recipe.append( $name );
  $recipe.append($img);
  $recipe.append($ing);
  $recipe.append($save);
  $container.append( $recipe );
}

// the saveRecipes have to be called right after get
function getRecipes(event) {
  event.preventDefault()
  var $items    = $('#items').val()
  $.getJSON('/recipes',{ingredients:$items}).done(function( recipes ) {
    recipes.results.forEach(function( recipe ) {
      renderRecipe( recipe );
    })
    saveRecipes();
  })
}

$(function() {
  var $form     = $('form')
  $form.submit(getRecipes);



})
// Mike W & Cyrus helped
function saveRecipes(e){
  $('.save').on('click',function(e){

    console.log('here')
    let $siblings = $(event.target).parent().children();
    console.log($siblings.eq(0))
    console.log($siblings.eq(0)[0].innerHTML)
    let data ={
      title: $siblings.eq(0)[0].innerText
    }
    console.log(data)
    $.ajax({
      url: '/recipes',
      method: 'post',
      data: data
    })
  })
}




