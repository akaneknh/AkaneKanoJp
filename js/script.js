$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll');
  })
  $('.nav-item a').on('click', function () {
    $('.nav-wrapper').removeClass('fade');
    $('body').removeClass('noscroll');
    $('.burger-btn').toggleClass('close');
  });
});

// Scrool Action
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.design-skill, .webdev-skill, .work, .other-side-content, .reason-card, .experience-card').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});





// Typing
function TextTypingAnime() {
  $('.TextTyping').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children();

      thisChild.each(function (i) {
        var time = 100;

        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop();
        $(this).css("display", "none");
      });
    }
  });
}


$(window).on('load', function () {

  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();
});


// HEADER
var beforePos = 0;

function ScrollAnime() {
  var elemTop = $('#section2, .function-req-wrap').offset().top;
  var scroll = $(window).scrollTop();

  if (scroll == beforePos) {

  } else if (elemTop > scroll || 0 > scroll - beforePos) {

    $('header').removeClass('UpMove');
    $('header').addClass('DownMove');
  } else {

    $('header').removeClass('DownMove');
    $('header').addClass('UpMove');
  }

  beforePos = scroll;
}

$(window).scroll(function () {
  ScrollAnime();
});


$(window).on('load', function () {
  ScrollAnime();
});

var headerH = $("header").outerHeight(true);
$('#g-nav ul li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - headerH;
  $('body,html').animate({ scrollTop: pos }, 70);
  return false;
});