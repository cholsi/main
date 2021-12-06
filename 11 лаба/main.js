$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
} 
});
$('#toTop').click(function() { 
$('body,html').animate({scrollTop:0},800);
});
});
$(function() {
    var link=$('.tims a');
    link.mouseover(function(){
        $(this).addClass('zagolovok')
    })
    link.mouseout(function(){
        $(this).removeClass('zagolovok');
    })

});
$(function() {
    var ame=$('.imagef p');
    ame.hover(
        function(){
            var text=$('#textigrokov').show(1000);
            var img=$('#textigrokov');
            $(img).removeClass('vis');
    },
    function(){ 
            var text=$('#textigrokov').hide(1000);
            var img=$('#textigrokov');
            $(img).addClass('vis');
    });
});
$(function() {
    var ame=$('.result p');
    ame.hover(
        function(){
            var text=$('#rez').show(1000);
            var img=$('#rez');
            $(img).removeClass('vis');
    },
        function(){
            var text=$('#rez').hide(1000);
            var img=$('#rez');
            $(img).addClass('vis');
    });
});
$(function() {
    var ame=$('#2');
    ame.hover(
        function(){
            var z=$('.xokkey img');
            $(z).attr("src","хоккей/хоккей2.jpg");
    },
    function(){
        var z=$('.xokkey img');
        $(z).attr("src","хоккей/хоккей1.jpg");
    });
});

$(document).ready(function(){
	animBg();
});
function animBg() {
	$('.oen img').animate({
	   'width': '150%',
	  'right':'+30%',
	  'top': '+10%'
	  }, 3000)
   	.animate({
            'width': '50%',
            'left': '-5%',
            'top': '0',
            'right':'-5%',

        }, 3000, animBg);
}
