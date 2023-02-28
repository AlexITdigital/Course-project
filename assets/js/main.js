$(document).ready(function () {
  /* ======= Fixed header when scrolled ======= */

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  /* ======= Scrollspy ======= */
  $("body").scrollspy({ target: "#header", offset: 100 });

  /* ======= ScrollTo ======= */
  $("a.scrollto").on("click", function (e) {
    //store hash
    var target = this.hash;

    e.preventDefault();

    $("body").scrollTo(target, 800, { offset: -50, axis: "y" });
    //Collapse mobile menu after clicking
    if ($(".navbar-collapse").hasClass("in")) {
      $(".navbar-collapse").removeClass("in").addClass("collapse");
    }
  });
});

$("section.awSlider .carousel").carousel({
  pause: "hover",
  interval: 2000,
});

var startImage = $("section.awSlider .item.active > img").attr("src");
$("section.awSlider").append('<img src="' + startImage + '">');

$("section.awSlider .carousel").on("slid.bs.carousel", function () {
  var bscn = $(this).find(".item.active > img").attr("src");
  $("section.awSlider > img").attr("src", bscn);
});

/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/
