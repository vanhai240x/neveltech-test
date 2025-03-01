$(".header .burger").click(() => {
  $(".header .menu-fixed").toggleClass("active");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
  if ($(this).scrollTop() > 400) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});
