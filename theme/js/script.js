$(document).ready(function() {
  // Preloader js
  $(window).on("load", function () {
    $(".preloader").fadeOut(0);
  });

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

  // chatbot
  const chatbotLauncher = $('.chatbot-launcher');
  const chatbotExpanded = $('#chatbot-expanded');
  const chatbotIcon = $('.chatbot-launcher img');

  chatbotLauncher.on('click', function() {
    chatbotExpanded.toggle();
    chatbotLauncher.toggleClass('active');
    chatbotIcon.toggleClass('active');
  });
});

// Simulate a response message
function simulateResponse(message) {
  // Show typing indicator
  $('.typing-indicator').show();

  // Wait for 1.5 seconds to simulate "typing"
  setTimeout(function() {
    // Hide typing indicator
    $('.typing-indicator').hide();

    // Add response message to chat
    $('<div class="chatbot-message">' + message + '</div>').appendTo('.chatbot-messages');

    // Scroll to bottom of chat
    $('.chatbot-messages').scrollTop($('.chatbot-messages')[0].scrollHeight);
  }, 1500);
}

// Example usage:
simulateResponse('Hello! How can I assist you today?');

// Mock response to send back
const response = "This is a mock response.";

// Get the chat elements
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// Add event listener for form submission
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Add the user's message to the chat
  const message = chatInput.value.trim();
  if (message) {
    const userMessage = `<div class="chat-message user-message">${message}</div>`;
    chatMessages.insertAdjacentHTML("beforeend", userMessage);
  }

  // Display the loading animation
  const loadingAnimation = '<div id="chat-loading"></div>';
  chatMessages.insertAdjacentHTML("beforeend", loadingAnimation);

  // Simulate a delay before sending the response
  setTimeout(function() {
    // Remove the loading animation
    const loading = document.getElementById("chat-loading");
    if (loading) {
      loading.remove();
    }

    // Add the mock response to the chat
    const botMessage = `<div class="chat-message bot-message">${response}</div>`;
    chatMessages.insertAdjacentHTML("beforeend", botMessage);

    // Clear the input field
    chatInput.value = "";
  }, 2000);
});


