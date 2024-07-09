import { createRestaurantCard } from "../Components/Card/card.js";

document.addEventListener("DOMContentLoaded", function () {
	// Carrega o Header
	fetch("../Components/Header/header.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header").innerHTML = data;
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "../Components/Header/header.css";
			document.head.appendChild(link);
		});

	// Carrega o Footer
	fetch("../Components/Footer/footer.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("footer").innerHTML = data;
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "../Components/Footer/footer.css";
			document.head.appendChild(link);
		});

	// Dados dos restaurantes
	const restaurantes = [
		{
			id: 1,
			nome: "Chinesa",
			descricao:
				"Experimente pratos autênticos como Pato de Pequim, Dim Sum e Mapo Tofu, que trazem os sabores intensos e diversificados da culinária chinesa.",
			imagem: "../Assets/Images/restaurante1.webp",
		},
		{
			id: 2,
			nome: "Tailandesa",
			descricao:
				"Desfrute de uma explosão de sabores com pratos como Pad Thai, Tom Yum e Curry Verde, conhecidos pela mistura equilibrada de doce, salgado, azedo e picante.",
			imagem: "../Assets/Images/restaurante2.webp",
		},
		{
			id: 3,
			nome: "Indiana",
			descricao:
				"Descubra a rica e aromática culinária indiana com pratos como Butter Chicken, Biryani e Chana Masala, famosos pelo uso generoso de especiarias.",
			imagem: "../Assets/Images/restaurante3.webp",
		},
		{
			id: 4,
			nome: "Francesa",
			descricao:
				"Delicie-se com a elegância da culinária francesa, com pratos como Coq au Vin, Ratatouille e Creme Brûlée, que são sinônimos de sofisticação e sabor.",
			imagem: "../Assets/Images/restaurante4.webp",
		},
		{
			id: 5,
			nome: "Brasileira",
			descricao:
				"Saboreie a diversidade da culinária brasileira com pratos como Feijoada, Moqueca e Pão de Queijo, representando a rica herança cultural do Brasil.",
			imagem: "../Assets/Images/restaurante5.webp",
		},
		{
			id: 6,
			nome: "Vegana",
			descricao:
				"Aprecie uma culinária sustentável e saudável com pratos veganos como Hambúrguer de Grão-de-Bico, Tofu Grelhado e Saladas Coloridas, ricos em nutrientes e sabor.",
			imagem: "../Assets/Images/restaurante6.webp",
		},
		{
			id: 7,
			nome: "Peruana",
			descricao:
				"Explore os sabores vibrantes da culinária peruana com pratos como Ceviche, Lomo Saltado e Aji de Gallina, conhecidos pela fusão de ingredientes frescos e técnicas antigas.",
			imagem: "../Assets/Images/restaurante7.webp",
		},
		{
			id: 8,
			nome: "Americana",
			descricao:
				"Desfrute dos clássicos da culinária americana como Hambúrgueres, Costelas ao Barbecue e Apple Pie, que são amados por sua simplicidade e sabor reconfortante.",
			imagem: "../Assets/Images/restaurante8.webp",
		},
		{
			id: 9,
			nome: "Turca",
			descricao:
				"Delicie-se com a rica herança da culinária turca com pratos como Kebab, Baklava e Pide, conhecidos por seus sabores robustos e texturas variadas.",
			imagem: "../Assets/Images/restaurante9.webp",
		},
		{
			id: 10,
			nome: "Grega",
			descricao:
				"Saboreie a frescura da culinária grega com pratos como Moussaka, Souvlaki e Salada Grega, que combinam ingredientes frescos com azeite de oliva e ervas.",
			imagem: "../Assets/Images/restaurante10.webp",
		},
		{
			id: 11,
			nome: "Espanhola",
			descricao:
				"Aprecie a diversidade da culinária espanhola com pratos como Paella, Tapas e Churros, que são celebrados por suas cores vivas e sabores intensos.",
			imagem: "../Assets/Images/restaurante11.webp",
		},
		{
			id: 12,
			nome: "Libanesa",
			descricao:
				"Desfrute da culinária libanesa com pratos como Homus, Falafel e Kafta, famosos pela combinação harmoniosa de especiarias, legumes e carnes.",
			imagem: "../Assets/Images/restaurante12.webp",
		},
		{
			id: 13,
			nome: "Mediterrânea",
			descricao:
				"Aprecie a saúde e o sabor da culinária mediterrânea com pratos como Salada Caprese, Risoto e Peixe Grelhado, ricos em azeite de oliva, ervas frescas e vegetais.",
			imagem: "../Assets/Images/restaurante13.webp",
		},
	];

	// Adiciona os cards de restaurantes
	const cardContainer = document.getElementById("card-container");
	restaurantes.forEach((restaurante) => {
		const card = createRestaurantCard(restaurante);
		cardContainer.appendChild(card);
	});
});
