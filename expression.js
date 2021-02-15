// JavaScript Document

// array get last ----------------------------------------------------------------------------------------------------------

// home - what's new //
$(document).ready(function(){
$(".infobox .info-contents:last-child").addClass("last");
});

// Autolink  ----------------------------------------------------------------------------------------------------------

$(document).ready(function(){
        $(".autolink").each(function(){
            $(this).html( $(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">$1</a> ') );
        });
});

// Fancybox Auto  ----------------------------------------------------------------------------------------------------------

$(document).ready(function() {
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
});

// Main Navigation  ----------------------------------------------------------------------------------------------------------

$(function() {
  var naviflag = true;
  $('.navi-open').click(function(e) {
    if (naviflag) {
      $("nav").animate({left: '-180px'});
        naviflag = false;
    } else {
      $("nav").animate({left: '0px'});
        naviflag = true;
    }
  });
});

$(function(){
var url = window.location;
   $('nav ul li a[href="'+url+'"]').addClass('active');
});