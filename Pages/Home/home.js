
import { createRestaurantCard } from '../Components/Card/card.js';

document.addEventListener('DOMContentLoaded', function() {
    // Carrega o Header
    fetch('../Components/Header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../Components/Header/header.css';
            document.head.appendChild(link);
        });

    // Carrega o Footer
    fetch('../Components/Footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../Components/Footer/footer.css';
            document.head.appendChild(link);
        });

    // Dados dos restaurantes
    const restaurantes = [
        { id: 1, nome: 'Restaurante 1', descricao: 'Descrição do Restaurante 1', imagem: '../Assets/Images/restaurante1.webp' },
        { id: 2, nome: 'Restaurante 2', descricao: 'Descrição do Restaurante 2', imagem: '../Assets/Images/restaurante2.webp' },
        { id: 3, nome: 'Restaurante 3', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante3.webp' },
        { id: 4, nome: 'Restaurante 4', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante4.webp' },
        { id: 5, nome: 'Restaurante 5', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante5.webp' },
        { id: 6, nome: 'Restaurante 6', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante6.webp' },
        { id: 7, nome: 'Restaurante 7', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante7.webp' },
        { id: 8, nome: 'Restaurante 8', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante8.webp' },
        { id: 9, nome: 'Restaurante 9', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante9.webp' },
        { id: 10, nome: 'Restaurante 10', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante10.webp' },
        { id: 11, nome: 'Restaurante 11', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante11.webp' },
        { id: 12, nome: 'Restaurante 12', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante12.webp' },
        { id: 13, nome: 'Restaurante 13', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante13.webp' },
        { id: 14, nome: 'Restaurante 14', descricao: 'Descrição do Restaurante 3', imagem: '../Assets/Images/restaurante14.webp' },
      ];

    // Adiciona os cards de restaurantes
    const cardContainer = document.getElementById('card-container');
    restaurantes.forEach(restaurante => {
        const card = createRestaurantCard(restaurante);
        cardContainer.appendChild(card);
    });
});
