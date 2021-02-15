$(document).ready(function(){
$('.bxslider').bxSlider({
  mode: 'fade',
  speed: 0,
  controls:false,
  auto:false,
  startSlide:1,
  pagerCustom: '#character-thum',
  touchEnabled:false
});
});


$(function() {
	
  var audioList = audiojs.createAll();
  $(".sample-voice ol li a").on("click", function(e) {
    e.preventDefault();
	
    var mybox = $(this).closest(".sample-voice");
    var index = $(".sample-voice").index(mybox);
	var samplevoicelink = $(this).data('src');
	$(this).parent().parent().prev().children("audio").attr('src', samplevoicelink);
	
    var audio = new Audio(samplevoicelink);
    audio.load();
	//audio.play();
	$(this).parent().parent().prev().children(".play-pause").children(".play").click();
  });
});



$(document).ready(function(){
$(".chg-button a.stand1").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand1"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand2").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand2"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand3").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand3"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand4").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand4"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand5").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand5"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand6").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand6"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand7").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand7"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand8").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand8"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand9").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand9"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand10").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand10"); });
$(".stand-image").fadeIn("fast"); });

$(".chg-button a.stand11").click(
function(){
$(".stand-image").fadeOut("fast", function() { $(this).removeClass().addClass("stand-image").addClass("stand11"); });
$(".stand-image").fadeIn("fast"); });

$("#character-thum ul li a").click(
function(){
$(".stand-image").removeClass().addClass("stand-image");
$(".stand-image").addClass("stand1");
}
);
});

$(document).ready(function() {
	$(".various").fancybox({
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		beforeLoad : function() {         
            this.width  = parseInt(this.element.data('fancybox-width'));  
            this.height = parseInt(this.element.data('fancybox-height'));
        }
	});
});


$(document).ready(function(){
  $('.character-thum').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 12,
  slidesToScroll: 12,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 10
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7
      }
	},
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7
      }
    }
  ]
});
});