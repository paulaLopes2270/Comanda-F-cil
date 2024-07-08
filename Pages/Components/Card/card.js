export function createRestaurantCard(restaurante) {
  // Seleciona o template
  const template = document.getElementById('card-template').content.cloneNode(true);

  // Configura os elementos do card
  template.querySelector('img').src = restaurante.imagem;
  template.querySelector('img').alt = `Imagem de ${restaurante.nome}`;
  template.querySelector('h2').textContent = restaurante.nome;
  template.querySelector('p').textContent = restaurante.descricao;

  // Retorna o elemento card preenchido
  return template;
}