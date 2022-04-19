
//Função para efeito parallax na foto de Blumenau
$(function () {
    $('.cover').each(function () {
        var $obj = $(this);

        $(window).scroll(function () {
            var yPos = -($(window).scrollTop() / $obj.data('speed') * 12);
			console.log( $obj.data('speed'));
            var bgpos = yPos + 'px';
            $(".cover").css("top", bgpos);


        });
    });
});


//Função para aumentar e diminuir a logo no menu
$(window).scroll(function () {
    var $logomarca = $('#logomarca'),
            scrollpos = $(window).scrollTop();
    if (scrollpos >= 175) {
        $logomarca.css({
            "margin-top": "0",
            "background-color": "transparent"
        });
    }
    else {
        $logomarca.css({
            "margin-top": "0.9em",
            "background-color": "#000000"
        });
    }
    ;
});

$(document).ready(function (e) {
   // $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var nomeDiv = (this.name);
		
		console.log(nomeDiv);

        $('a').each(function () {
            $('#menu a').removeClass('active');
        });
		
        $(this).addClass('active');

		
		var target = this.hash,
                menu = target;
        $target = $(target);
		
		
		
        $('html, body').stop().animate({'scrollTop': $target.offset().top + 2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

$(function () {
   // onScroll();
});


function onScroll() {
    var scrollPos = $(document).scrollTop();
       $('#menu a').each(function() {
           var currLink = $(this);

            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu a').removeClass("active");
              currLink.addClass("active");

			} else {
			currLink.removeClass("active");          
			}
  });   
}


$(document).ready(function () {
    // Cache the Window object
    $window = $(window);

    $('div[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!								
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% ' + yPos + 'px';

            // Move the background
            $bgobj.css({backgroundPosition: coords});

        }); // window scroll Ends

    });

});
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");

$(function () {
    $(this).each(function () {
        $(".rotation-container").mouseover(function () {

            id = $(this).attr('id');

            $("#" + id + " p").addClass("descricaoPalestrantes");
            $("#" + id + " img").css("transition", "all 1.30s ease-out 0s").css("opacity", "0.5");
        })
                .mouseout(function () {
                    $("#" + id + " p").removeClass("descricaoPalestrantes");
                    $("#" + id + " img").css("opacity", "1");
                })
                .mouseleave(function () {
                    $("#" + id + " p").removeClass("descricaoPalestrantes");
                    $("#" + id + " img").css("opacity", "1");
                });
    });
});

function menuProgramacao(dia) {
    escondeMenuProgramacao();
    if (dia == 'dia1' || dia == undefined) {
        $('#dia1').fadeIn(400);
        $('#dia1menu').css('border-top-left-radius', '2em').css('background-color', '#767575');
    }
    if (dia == 'dia2') {
        $('#dia2').fadeIn(500);
        $('#dia2menu').css('border-top-left-radius', '2em').css('background-color', '#767575');
    }
    if (dia == 'dia3') {
        $('#dia3').fadeIn(500);
        $('#dia3menu').css('border-top-left-radius', '2em').css('background-color', '#767575');
    }
    if (dia == 'dia4') {
        $('#dia4').fadeIn(500);
        $('#dia4menu').css('border-top-left-radius', '2em').css('background-color', '#767575');
    }
}

function escondeMenuProgramacao() {
    $('#dia1').hide();
    $('#dia2').hide();
    $('#dia3').hide();
    $('#dia4').hide();
    $('#dia1menu').css('border-top-left-radius', '0').css('background-color', '#000000');
    $('#dia2menu').css('border-top-left-radius', '0').css('background-color', '#000000');
    $('#dia3menu').css('border-top-left-radius', '0').css('background-color', '#000000');
    $('#dia4menu').css('border-top-left-radius', '0').css('background-color', '#000000');
}

$(function () {
    menuProgramacao();
});

