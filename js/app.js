(function ($) {
  "use strict";
  /*==================================================================
  [ Validate after type ]*/
  $('.validate-input .input100').each(function () {
    $(this).on('blur', function () {
      if (validate(this) == false) {
        showValidate(this);
      } else {
        $(this).parent().addClass('true-validate');
      }
    })
  })

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
      $(this).parent().removeClass('true-validate');
    });
  });
  // /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      //Match regex with control value
      var regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),

        email = $(input).val();
      if (regex.test(email)) {
        return true;
      } else {
        return false;
      }
    } else {
      if ($(input).attr('name') === 'phone') {
        //Validate Phone number also
        //Match regex with control value
        var regex = new RegExp(/^[4-9][0-9]{9}$/),
          phone = $(input).val();
        if (regex.test(phone)) {
          return true;
        } else {
          return false;
        }
      } else {
        if ($(input).val().trim() === '') {
          return false;
        } else {
          return true;
        }
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');

    $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>')
    $('.btn-hide-validate').each(function () {
      $(this).on('click', function () {
        hideValidate(this);
      });
    });
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
    $(thisAlert).find('.btn-hide-validate').remove();
  }
})(jQuery);



// making sticky navbar
const navbar = document.querySelector(".navbar-section");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-navbar");

  } else {
    navbar.classList.remove("fixed-navbar")
  }
});
// /////code for smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
const linkContainer = document.querySelector(".collapse")
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // calculate the heights
    const navbarHeight = navbar.getBoundingClientRect().height;
    const linkContainerHeight = linkContainer.getBoundingClientRect().height;
    const fixNavbar = navbar.classList.contains("fixed-navbar");
    let position = element.offsetTop - navbarHeight;
    console.log(position);
    console.log(navbarHeight)
    if (!fixNavbar) {
      position = position - (navbarHeight);
    }
    if (navbarHeight > 90) {
      position = position + linkContainerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position
    });
    // closing link container
    linkContainer.classList.remove("show");
  })
});

$('#topheader .navbar-nav a').on('click', function () {
  $('#topheader .navbar-nav').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});