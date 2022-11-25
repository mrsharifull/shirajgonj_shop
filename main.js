// custom

$(document).ready(function(){
	$('.cart-icon').on('click',function(){
        $('.header-cart').toggle();
    });
});


$(document).ready(function(){
	$('.bars').on('click',function(){
        $('.bar1').addClass('bar01');
        $('.bar2').addClass('bar02');
        $('.bar3').addClass('bar03');
        $('.bar4').addClass('bar04');
        $('.sitebar').addClass('sitebar-show');

    });
    $('.Close').on('click',function(){
        $('.bar1').removeClass('bar01');
        $('.bar2').removeClass('bar02');
        $('.bar3').removeClass('bar03');
        $('.bar4').removeClass('bar04');
        $('.sitebar').removeClass('sitebar-show');
        
    });
});


$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

// slick slider
$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.next'),
    prevArrow: $('.previous'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });

$('.all-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt'),
    prevArrow: $('.prv'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });

$('.all-items1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt1'),
    prevArrow: $('.prv1'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });

$('.all-items2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt2'),
    prevArrow: $('.prv2'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });
$('.all-items3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt3'),
    prevArrow: $('.prv3'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });
$('.all-items4').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt4'),
    prevArrow: $('.prv4'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });

$('.all-items5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt5'),
    prevArrow: $('.prv5'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });

$('.all-items6').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    nextArrow: $('.nxt6'),
    prevArrow: $('.prv6'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });






/*etalage js*/
    $(document).ready(function(){

        $('#etalage').etalage({
            thumb_image_width: 400,
            thumb_image_height: 400,
            source_image_width: 800,
            source_image_height: 800,
            zoom_area_width:400,         
            zoom_area_height:400,  
            description_opacity:.5,
            smallthumb_hide_single:false,
            smallthumbs_position:'left',      
            show_hint: true,
            change_callback: function(image_number, instance_id){
                var time = new Date();
                $('#alert').html(time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+' - Change callback: The ID of the Etalage instance is "<b>'+instance_id+'</b>" and the newly active image number is "<b>'+image_number+'</b>".');
            }
        });

    });


/*niceNumber js*/

    $(function(){

        $('input[type="number1"]').niceNumber();

    });





















