$(document).ready(function () {
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  $("body").scrollspy({ target: "#header", offset: 100 });

  $("a.scrollto").on("click", function (e) {
    var target = this.hash;

    e.preventDefault();

    $("body").scrollTo(target, 800, { offset: -50, axis: "y" });

    if ($(".navbar-collapse").hasClass("in")) {
      $(".navbar-collapse").removeClass("in").addClass("collapse");
    }
  });
});

$("section.awSlider .carousel").carousel({
  pause: "hover",
  interval: 5000,
});

var startImage = $("section.awSlider .item.active > img").attr("src");
$("section.awSlider").append('<img src="' + startImage + '">');

$("section.awSlider .carousel").on("slid.bs.carousel", function () {
  var bscn = $(this).find(".item.active > img").attr("src");
  $("section.awSlider > img").attr("src", bscn);
});
