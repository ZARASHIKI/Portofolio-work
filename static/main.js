function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var closedIcon = document.getElementById('nav-icon1');

    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    closedIcon.classList.toggle('open');

    // Menambah atau menghapus pseudo-element ::before saat menu dibuka atau ditutup
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.add('before-mobile-menu');
    } else {
        mobileMenu.classList.remove('before-mobile-menu');
    }
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
$(document).ready(function () {
    $('.smth').click(function (event) {
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
$(document).ready(function () {
    let slideIndex = 0;
    let slideIndex2 = 0;
    let slideIndex3 = 0;
    let slides = document.getElementsByClassName("my-slide");
    let slides2 = document.getElementsByClassName("my-slide2");
    let slides3 = document.getElementsByClassName("my-slide3");
    let dots = document.getElementsByClassName("dot");
    let dots2 = document.getElementsByClassName("dot2");
    let dots3 = document.getElementsByClassName("dot3");

    // Automatic slideshow
    showSlides();
    showSlides2();
    showSlides3();

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("bg-white");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("bg-white");
        setTimeout(showSlides, 5000);

    }

    function showSlides2() {
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
            dots2[i].classList.remove("bg-white");
        }
        slideIndex2++;
        if (slideIndex2 > slides2.length) { slideIndex2 = 1; }
        slides2[slideIndex2 - 1].style.display = "block";
        dots2[slideIndex2 - 1].classList.add("bg-white");
        setTimeout(showSlides2, 5000);

    }

    function showSlides3() {
        for (let i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
            dots3[i].classList.remove("bg-white");
        }
        slideIndex3++;
        if (slideIndex3 > slides3.length) { slideIndex3 = 1; }
        slides3[slideIndex3 - 1].style.display = "block";
        dots3[slideIndex3 - 1].classList.add("bg-white");
        setTimeout(showSlides3, 5000);

    }
});


tailwind.config = {
    theme: {
        extend: {
            screens: {
                'mo': '430px',
                'deko':'400px'
            },
            colors: {
                'boxform': '#0A619F',
                'cardhover': '#25282D',
                'skyy': '#0085FF',
                'hover': '#27292F',
                'all-bg': '#0F0F0F',
                'bank':'#1B1D21',
                'white': '#D2D2D2',
                'primary-red': 'var(--Primary-Red, #921616)',
                'indicator': '#2A2A2A',
                'menu':'#19191940'
            },
            width: {
                '40': '45rem',
                'mobile': '95%'
            },
            boxShadow: {
                'custom-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
            },
            backgroundImage: {
                'whatappblk': "url('/static/assets/wablack.svg')",
                'whatappclr': "url('/static/assets/wacolor.svg')"
            }
        }
    }
    
}