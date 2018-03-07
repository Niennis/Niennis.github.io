$(document).ready(function() {
  console.log('holi');
$('#juju').fadeIn(2000);
  
$('.myName').ready(function() {
  console.log('front end');
  setTimeout(() => {
  $('#front').fadeIn(8000);
  }, 1500);
})

});


// setTimeout(() => {
//   $('#estefania svg').after(`<h2 id="front" class="frontEnd">Front-End Developer</h2>`);
//   $('.containerAnimation').addClass('bgAnimation');

//   $('#estefania').fadeIn('slow')
// }, 5000);

