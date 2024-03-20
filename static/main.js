function toggleMenu() {
    var closedIcon = document.getElementById('nav-icon1');
    closedIcon.classList.toggle('open');
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
}
function send_email() {
    let submitButton = $('#submit');
    let loadingButton = $('#loading');

    submitButton.addClass('hidden');
    loadingButton.removeClass('hidden');
    let fname = $('#first_name').val();
    let lname = $('#last_name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    $.ajax({
        type: "POST",
        url: "/send_email",
        data: {
            fname: fname,
            lname: lname,
            email: email,
            message: message,
        },
        success: function (response) {
            submitButton.removeClass('hidden');
            loadingButton.addClass('hidden');
    


            alert("Thank you for your message. We will get back to you soon!")
            window.location.replace("/")
        },
    });
}
$(document).ready(function() {
  $('.smth').click(function(event) {
      event.preventDefault();

      var target = $($(this).attr('href'));

      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  });
});



tailwind.config = {
    theme: {
      extend: {
        colors: {
          'skyy':'#0085FF',
          'hover':'#27292F',
          'all-bg': '#0F0F0F',
          'white':'#D2D2D2',
          'primary-red': 'var(--Primary-Red, #921616)',
        },
       width:{
        '40':'45rem'
       }
      }
    }
  }