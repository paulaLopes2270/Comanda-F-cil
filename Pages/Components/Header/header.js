document.addEventListener("DOMContentLoaded", function() {
    console.log('Iniciando carregamento do header');
    fetch('../Components/Header/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
            console.log('Header carregado com sucesso');
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../Components/Header/header.css';
            document.head.appendChild(link);
            console.log('CSS do header carregado:', link.href);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});
