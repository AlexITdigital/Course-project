$(document).ready(function () {
  $(window).bind("scroll", function () {
    $(window).scrollTop() > 0
      ? $("#header").addClass("header-scrolled")
      : $("#header").removeClass("header-scrolled");
  }),
    $("body").scrollspy({ target: "#header", offset: 100 }),
    $("a.scrollto").on("click", function (a) {
      var e = this.hash;
      a.preventDefault(),
        $("body").scrollTo(e, 800, { offset: -50, axis: "y" }),
        $(".navbar-collapse").hasClass("in") &&
          $(".navbar-collapse").removeClass("in").addClass("collapse");
    });
});
