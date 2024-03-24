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
    let submitButtonm = $('#submitm');
    let loadingButtonm = $('#loadingm');


    let fname = $('#first_name').val();
    let lname = $('#last_name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (fname.trim() === '' || lname.trim() === '' || email.trim() === '' || message.trim() === '') {
        if (fname === '') {
            $('#first_name').css('border-color', 'red');
        }
        if (lname === '') {
            $('#last_name').css('border-color', 'red');
        }

        if (email === '') {
            $('#email').css('border-color', 'red');
        }

        if (message === '') {
            $('#message').css({
                'border-color': 'red',
                'border-width': '2px',  
                'outline': 'none'       
            });
        }
    } else {
        submitButton.addClass('hidden');
        loadingButton.removeClass('hidden');
        submitButtonm.addClass('hidden');
        loadingButtonm.removeClass('hidden');
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
                submitButtonm.removeClass('hidden');
                loadingButtonm.addClass('hidden');
                alert("Thank you for your message. We will get back to you soon!")
                window.location.replace("/")
            },
        });
    }

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



tailwind.config = {
    theme: {
        extend: {
            screens: {
                'mo': '430px',
                'deko': '400px'
            },
            colors: {
                'boxform': '#0A619F',
                'cardhover': '#25282D',
                'skyy': '#0085FF',
                'hover': '#27292F',
                'all-bg': '#0F0F0F',
                'bank': '#1B1D21',
                'white': '#D2D2D2',
                'primary-red': 'var(--Primary-Red, #921616)',
                'indicator': '#2A2A2A',
                'menu': '#19191940'
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