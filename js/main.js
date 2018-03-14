// .list-clients slider

$('.list-clients').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
  	{
  		breakpoint: 1124,
      	settings: {
      		slidesToShow: 5,
      		slidesToScroll: 3,
      	}
  	},
  	{
  		breakpoint: 968,
      	settings: {
      		slidesToShow: 4,
      		slidesToScroll: 2,
      	}
  	},
  	{
  		breakpoint: 768,
      	settings: {
      		slidesToShow: 3,
      		slidesToScroll: 2,
      	}
  	},
  	{
  		breakpoint: 600,
      	settings: {
      		slidesToShow: 2,
      		slidesToScroll: 1,
      	}
  	},
  ]
});


// .list-quotes slider
$('.list-quotes').slick({
	dots: true,
	arrows: false
});

// scroll
$('.go-to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1200); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

//tabs

$(document).ready(function() {
	$("#tabs-team").tabs({collapsible:true,selected:-1});
});


// number-counter
var time = 2, cc = 1;
$(window).scroll(function(){
	$('.list-statistic').each(function(){
	    var cPos = $(this).offset().top,
	    topWindow = $(window).scrollTop();
	    if (cPos < topWindow + 400) {
	  	    if (cc < 2) {
	  	      $('.card-number').addClass('visible');
			  $('div').each(function(){
			    var 
			    i = 1,
			    num = $(this).data('num'),
			    that = $(this),
			    int = setInterval(function(){
			      if (i < num) {
			        that.html( Math.round(i) );
			      }
			      else {
			        clearInterval(int);
			        cc = cc + 2;
			        that.html( num );
			      }
			      i += num / 30;
			    }, 60);
			  });
			}
	    }
	});
});

//circles
$(document).ready(function(){
	function create_circles(duration) {
		$('.circle').each(function(){
			var myCircle = Circles.create({
				  id:                  $(this).attr('id'),
				  radius:              72,
				  value:               $(this).data('value'),
				  maxValue:            100,
				  width:               3,
				  text:                function(value){return value + '%';},
				  colors:              ['#ffffff', 'var(--color-primary'],
				  duration:            duration,
				  wrpClass:            'circles-wrp',
				  textClass:           'circles-text',
				  valueStrokeClass:    'circles-valueStroke',
				  maxValueStrokeClass: 'circles-maxValueStroke',
				  styleWrapper:        true,
				  styleText:           true
				}); 
		});
	}

	// initialize
	create_circles(0);

	// animation on scrol
	var skills_loaded = false;
	$(window).scroll(function(){
		if ( skills_loaded ) return;

		var cPos = $('.list-skills').offset().top,
		topWindow = $(window).scrollTop();
		
		if (cPos < topWindow + 400) {
			create_circles(1400);
			skills_loaded = true;
		}
	});
});
