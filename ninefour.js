document.addEventListener('DOMContentLoaded', function() {
  var drawButton = document.getElementById('drawButton');
  var canvas = document.getElementById('canvas');
  var isDrawing = false;

  drawButton.addEventListener('click', function() {
    isDrawing = !isDrawing;
    if (isDrawing) {
      drawButton.innerText = 'Остановить рисование';
    } else {
      drawButton.innerText = 'Рисовать';
    }
  });

  document.addEventListener('mousemove', function(event) {
    if (isDrawing) {
      var dot = document.createElement('div');
      dot.className = 'draw';
      dot.style.left = (event.pageX - 5) + 'px';
      dot.style.top = (event.pageY - 5) + 'px';
      canvas.appendChild(dot);
    }
  });
});