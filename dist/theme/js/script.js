/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

// Preloader js
$(window).on("load", function () {
  "use strict";
  $(".preloader").fadeOut(0);
});

(function ($) {
  "use strict";

  // tab
  $(".tab-content")
    .find(".tab-pane")
    .each(function (idx, item) {
      var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
        title = $(this).attr("title");
      navTabs.append(
        '<li class="nav-item"><a class="nav-link" href="#">' +
          title +
          "</a></li>"
      );
    });

  $(".code-tabs ul.nav-tabs").each(function () {
    $(this).find("li:first").addClass("active");
  });

  $(".code-tabs .tab-content").each(function () {
    $(this).find("div:first").addClass("active");
  });

  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest(".code-tabs"),
      tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
    tabPanel.find(".active").removeClass("active");
    tab.addClass("active");
    tabPane.addClass("active");
  });

  // accordion-collapse
  $(".accordion-collapse").on("show.bs.collapse", function () {
    $(this).siblings(".accordion-header").addClass("active");
  });
  $(".accordion-collapse").on("hide.bs.collapse", function () {
    $(this).siblings(".accordion-header").removeClass("active");
  });

  //post slider
  $(".post-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="prevArrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="nextArrow"><i class="fas fa-angle-right"></i></button>',
  });

  // videoPopupInit
  function videoPopupInit() {
    var $videoSrc;
    $(".video-play-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#showVideo").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#showVideo").attr("src", $videoSrc);
    });
  }
  videoPopupInit();

  // table of content
  new ScrollMenu("#TableOfContents a", {
    duration: 400,
    activeOffset: 40,
    scrollOffset: 10,
  });
})(jQuery);

setTimeout(function() {
  // Code to open the chatbot goes here
}, 2000); // Delay of 2 seconds (2000 milliseconds)

// Code to animate the chatbot launcher button
var launcherButton = document.querySelector('.chatbot-launcher');
launcherButton.addEventListener('click', function() {
  launcherButton.classList.add('animated', 'pulse');
  setTimeout(function() {
    launcherButton.classList.remove('animated', 'pulse');
  }, 1000); // Remove animation after 1 second
});

const chatbotLauncher = document.querySelector('.chatbot-launcher');
const chatbotExpanded = document.querySelector('#chatbot-expanded');

// Toggle the display of the expanded chatbot element
chatbotLauncher.addEventListener('click', () => {
  chatbotExpanded.style.display = chatbotExpanded.style.display === 'none' ? 'block' : 'none';
});

const chatbotLauncher = document.querySelector('.chatbot-launcher');
const chatbotExpanded = document.querySelector('#chatbot-expanded');

// Toggle the display of the expanded chatbot element and rotate the launcher
chatbotLauncher.addEventListener('click', () => {
  chatbotExpanded.style.display = chatbotExpanded.style.display === 'none' ? 'block' : 'none';
  chatbotLauncher.classList.toggle('active');
});

// Add this code to your existing JavaScript code
const chatContainer = document.querySelector('.chat-container');
let offsetX, offsetY, isDragging = false;

chatContainer.addEventListener('mousedown', startDragging);
chatContainer.addEventListener('mouseup', stopDragging);

function startDragging(e) {
  if (e.target.classList.contains('chat-container')) {
    isDragging = true;
    offsetX = e.clientX - chatContainer.getBoundingClientRect().left;
    offsetY = e.clientY - chatContainer.getBoundingClientRect().top;
    chatContainer.classList.add('dragging');
    document.addEventListener('mousemove', drag);
  }
}

function stopDragging() {
  isDragging = false;
  chatContainer.classList.remove('dragging');
  document.removeEventListener('mousemove', drag);
}

function drag(e) {
  if (isDragging) {
    chatContainer.style.left = e.clientX - offsetX + 'px';
    chatContainer.style.top = e.clientY - offsetY + 'px';
  }
}
