$(document).ready(function() {
  $('#juju').fadeIn(2000);
  
  $('.myName').ready(function() {
    console.log('front end');
    setTimeout(() => {
    $('#front').fadeIn(8000);
    }, 1500);
  })

  $('#contactForm').submit(function(e) {
    let name = document.getElementById('inputName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
      alertify.error('Por favor, revisa las entradas');
    } else {
      $.ajax({
        url: 'https://formspree.io/estefania.osses.v@gmail.com',
        method: 'POST',
        data: $('#contactForm').serialize(),
        dataType: 'json'
      })
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success('Mensaje enviado')
    }
  });
});


// setTimeout(() => {
//   $('#estefania svg').after(`<h2 id="front" class="frontEnd">Front-End Developer</h2>`);
//   $('.containerAnimation').addClass('bgAnimation');

//   $('#estefania').fadeIn('slow')
// }, 5000);

