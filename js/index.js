// Homepage
new WOW().init();
$(".slider-mobile").slick({
  dots: false,
  arrows: false,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: "calc((100% - 1196px) / 2)",
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        centerPadding: "calc((100% - 1024px) / 2)",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "calc((100% - 768px) / 2)",
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
});

// Collapse
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Add smooth scrolling to all links
$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $(".header .menu-fixed").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 78,
      },
      800
    );
  }
});
