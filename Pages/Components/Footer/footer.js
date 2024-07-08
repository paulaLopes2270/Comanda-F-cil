document.addEventListener("DOMContentLoaded", function() {
  fetch('../../Pages/Components/Footer/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer").innerHTML = data;
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '../../Pages/Components/Footer/footer.css';
          document.head.appendChild(link);
      });
});
