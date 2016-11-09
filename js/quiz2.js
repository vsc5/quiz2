// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(document).ready(function(){
  $('.links li a').on('click', function(e) {
    e.preventDefault();
    alert('you clicked a link, good for you');
  });
  console.log('this is a message for you!!!');
});

$(document).ready(function(){
  $('ol > li').each(function() {
    $(this).css({color:'blue'});
    $(this).css('font-size', '1.5rem');
  });
});

$('#accordion1').click(function() {
  if(!$('#idk1').is(':visible')) {
    $('#idk1').fadeIn('slow');
  }
  else {
    $('#idk1').fadeOut('slow');
  }
});

$('#accordion2').click(function() {
  if(!$('#idk2').is(':visible')) {
    $('#idk2').fadeIn('slow');
  }
  else {
    $('#idk2').fadeOut('slow');
  }
});

$('#fade').click(function() {
  $('h1').fadeOut(1000);
  $('section').fadeOut(1000);
  $('p').fadeOut(1000);
  $('button').fadeOut(1000);
  $('#fade').fadeOut(1000);
  $('h2').fadeIn(1000);
});

$(document).ready(function(){
  alert("This makes me happy because I have no creativity when writing JS!!!!!!!!!!!!");
});