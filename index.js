// aos
AOS.init();

// lightbox toggle
$(".activityTL").click(function() {
  $("#flight").addClass("open");

});
$(".activityTM").click(function() {
  $("#ship").addClass("open");

});
$(".activityTR").click(function() {
  $("#sailing").addClass("open");

});
$(".activityBL").click(function() {
  $("#skydiving").addClass("open");

});
$(".activityBM").click(function() {
  $("#jetski").addClass("open");

});
$(".activityBR").click(function() {
  $("#scubadiving").addClass("open");

});
$(document).mouseup(function(e) {
  var _con = $(" .lightBox "); // 设置目标区域
  if (!_con.is(e.target) && _con.has(e.target).length === 0) {
    // 功能代码
    $(".lightBox").removeClass("open");

  }
});

// food & hostle
var $st_top = $(".pagination_top");
var $slickEl = $(".items");
var $st_bottom = $(".pagination_bottom");
var $slickEl_hostle = $(".items_hostle");

$slickEl.on("init reInit afterChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st_top.text(i + " / " + slick.slideCount);
});

$slickEl_hostle.on("init reInit afterChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st_bottom.text(i + " / " + slick.slideCount);
});

$slickEl.slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  focusOnSelect: true,
  dots: false,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 769 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      }
    }
  ]
});

$slickEl_hostle.slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  nextArrow: $(".next_b"),
  prevArrow: $(".prev_b"),
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      }
    }
  ]
});

// mobile activity slick
$('.slick').slick({
  arrows: false,
})

// transfer tab
var tabs = document.querySelectorAll(".tab");
var tabContents = document.querySelectorAll(".tabContent");
tabs.forEach((tab, index) => {
  tab.onclick = function() {
    removeActive();
    tab.classList.add("active");
    tabContents[index].classList.add("active");
  };
});
function removeActive() {
  tabs.forEach(tab_2 => {
    tab_2.classList.remove("active");
  });

  tabContents.forEach(content => {
    content.classList.remove("active");
  });
}
