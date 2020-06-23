$(document).ready(function () {

  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,

    }

  );
  // var typed = new Typed('#typed', {
  //     stringsElement: '#typed-strings',
  //     typeSpeed: 40,
  //     startDelay: 1000,
  //     smartBackspace: true,
  //     backDelay: 700

  //   });

  const myTags = [
    'JavaScript', 'CSS3', 'HTML5',
    'VueJS', 'SASS',
    'Python', 'PHP', 'Laravel',
    'MySQL', 'JQuery', 'Pug', 'Git',
    'Bootstrap 4', 'Figma', 'npm', 'Bower',
    'JSON', 'BEM', 'Photoshop'
  ];

  var tagCloud = TagCloud('.skills-cloud', myTags, {

    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'slow',
    initSpeed: 'slow',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

  });



  $(function () {

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 5) {
        $('.header-panel').css({'backgroundColor': 'rgba(0, 0, 0, .2)'});
      }
        else {
        $('.header-panel').css({ 'backgroundColor':  'rgba(0, 0, 0, 0)' });
        }
    })

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('header').css({ 'backgroundColor': '#336699' });
        $('.resume-wrap').css({ 'backgroundColor': '#336699' });
        $('.top').css({ 'display': 'block' });
      }
      else {
        $('header').css({ 'backgroundColor': '#119FB3' });
        $('.resume-wrap').css({ 'backgroundColor': '#119FB3' });
        $('.top').css({ 'display': 'none' });
      }
    })
  });

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

  $('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 800,   // по умолчанию «400»
        easing: "swing" // по умолчанию «swing»
    });

    return false;
});

$('.burger-menu').on("click", function() {
  $('.mobile-menu').toggleClass('mob-active');
  $('.burger-menu').toggleClass('burger-active');
})
$('.mobile-menu a').on("click", function() {
  console.log('clicked');
  $('.mobile-menu').removeClass('mob-active');
  $('.burger-menu').removeClass('burger-active');
})



});