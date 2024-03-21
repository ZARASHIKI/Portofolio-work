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

$(document).ready(function () {
  $(window).scroll(function () {
      $('.item').each(function () {
          var windowHeight = $(window).height();
          var windowTopPosition = $(window).scrollTop();
          var windowBottomPosition = (windowTopPosition + windowHeight);
          var itemTopPosition = $(this).offset().top;
          var itemBottomPosition = (itemTopPosition + $(this).outerHeight());

          // Check if item is within viewport
          if ((itemBottomPosition >= windowTopPosition) && (itemTopPosition <= windowBottomPosition)) {
              $(this).addClass('visible');
          } else {
              $(this).removeClass('visible');
          }
      });
  });

  // Check visibility on page load
  $(window).scroll();
});
$(document).ready(function(){
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("my-slide");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" bg-white", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " bg-white";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
});

tailwind.config = {
    theme: {
      extend: {
        colors: {
          'boxform':'#0A619F',
          'cardhover':'#25282D',
          'skyy':'#0085FF',
          'hover':'#27292F',
          'all-bg': '#0F0F0F',
          'white':'#D2D2D2',
          'primary-red': 'var(--Primary-Red, #921616)',
          'indicator': '#2A2A2A',
        },
       width:{
        '40':'45rem',
        'mobile':'95%'
       },
       boxShadow: {
        'custom-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
      },
       backgroundImage:{
        'whatappblk':"url('/static/assets/wablack.svg')",
        'whatappclr':"url('/static/assets/wacolor.svg')"
       }
      }
    }
  }