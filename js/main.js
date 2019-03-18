//console.log('IMIN')
$(document).ready(function (){
  /*
  Basic selectors
  */
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')
/*
content - text , html, and input
*/
//$('.first').text('lets learn <em>jquery</em>')
$('.first').html('lets learn <em>jquery</em>')
$('.first').prepend('<h2>Welcome</h2>')
$('.first').after('<small>make webpages interactive</small>')
$('#yourName').val('Bob Builder')
/* Attribute Selector*/
$('a[href="#1"]').css('background-color', 'tomato')
$('a [href^="#"]').css('color', 'grey')
$('a[href*="google"]').css('font-weight', 'bold')
/* Animation Functions */
//$('.card:first').delay(1000).hide(400).show(800, function(){alert('we\'re back') })
$('.card').animate({borderRaduis: '20px'}, 400)

$('img:first').attr('src','./img/image-5.jpg')

/*Class Methods*/
console.log($('img:first').hasClass('special'))
//$('img').addClass('special')
$('img').toggleClass('special')

})
