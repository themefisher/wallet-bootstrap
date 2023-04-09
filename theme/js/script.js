$(document).ready(function() {
  // Preloader js
  $(window).on("load", function () {
    $(".preloader").fadeOut(0);
  });

  // Other existing code

  // chatbot
  const chatbotLauncher = $('.chatbot-launcher');
  const chatbotExpanded = $('#chatbot-expanded');
  const chatbotIcon = $('.chatbot-launcher img');

  chatbotLauncher.on('click', function() {
    chatbotExpanded.toggle();
    chatbotLauncher.toggleClass('active');
    chatbotIcon.toggleClass('active');
    return false;
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
