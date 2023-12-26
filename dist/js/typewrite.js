document.addEventListener('DOMContentLoaded', function() {
  var typewriterElement = document.querySelector('.typewriter h1');
  if (typewriterElement) {
    var text = typewriterElement.textContent;
    var i = 0;
    typewriterElement.textContent = '';

    function typeWriter() {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      }
    }

    typeWriter();
  }
});