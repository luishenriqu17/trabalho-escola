document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const favoritesList = document.getElementById('favorites-list');

    // Simulação de dados de produtos
   const products = [
    { id: 1, name: 'Paralama Creta 17/21 Esquerdo', price: 705, image: 'fotos/para lama.webp' },
    { id: 2, name: 'Farol Onix 2020 Direito', price: 580, image: 'fotos/ft1.webp' },
    { id: 3, name: 'Parachoque Dianteiro HB20 2017/20', price: 890, image: 'fotos/ft2.webp' },
    { id: 4, name: 'Retrovisor Corolla 2015 Direito', price: 430, image: 'fotos/ft3.webp' },
    { id: 5, name: 'Grade Dianteira Gol G6 2013/16', price: 220, image: 'fotos/ft4.webp' },
    { id: 6, name: 'Lanterna Traseira Fiat Argo 2018 Esquerda', price: 350, image: 'fotos/ft5.webp' },
    { id: 7, name: 'Capô HB20 2018/22', price: 1350, image: 'fotos/ft6.webp' },
    { id: 8, name: 'Farol Corolla 2019 Esquerdo', price: 1280, image: 'fotos/ft7.webp' },
    { id: 9, name: 'Parachoque Traseiro Onix Plus 2020', price: 780, image: 'fotos/ft8.webp' },
    { id: 10, name: 'Retrovisor Hilux 2016 Direito', price: 980, image: 'fotos/ft9.webp' },
    { id: 11, name: 'Lanterna HB20 2019 Direita', price: 390, image: 'fotos/ft10.webp' },
    { id: 12, name: 'Paralama Gol G7 2017/21 Direito', price: 460, image: 'fotos/ft11.webp' },
    { id: 13, name: 'Grade Dianteira Corolla 2015', price: 520, image: 'fotos/ft12.webp' },
    { id: 14, name: 'Retrovisor Polo 2018 Esquerdo', price: 450, image: 'fotos/ft13.webp' },
    { id: 15, name: 'Parachoque Dianteiro Saveiro G7 2017/23', price: 1050, image: 'fotos/ft14.webp' },
    { id: 16, name: 'Farol Sandero 2016 Direito', price: 490, image: 'fotos/ft15.webp' },
    { id: 17, name: 'Lanterna Traseira Renegade 2019 Direita', price: 720, image: 'fotos/ft16.webp' },
    { id: 18, name: 'Capô Onix 2020', price: 1200, image: 'fotos/ft3.webp' },
    { id: 19, name: 'Para-lama Argo 2018 Direito', price: 480, image: 'fotos/ft17.webp' },
    { id: 20, name: 'Retrovisor Creta 2018 Esquerdo', price: 530, image: 'fotos/ft18.webp' },
    { id: 21, name: 'Grade Dianteira HB20 2020', price: 350, image: 'fotos/ft19.webp' },
    { id: 22, name: 'Farol Gol G6 2015 Esquerdo', price: 420, image: 'fotos/ft20.webp' },
    { id: 23, name: 'Lanterna Onix Plus 2020 Esquerda', price: 640, image: 'fotos/ft21.webp' },
    { id: 24, name: 'Porta Dianteira Corolla 2017 Direita', price: 1650, image: 'fotos/ft22.webp' }
];

    // Função para renderizar produtos
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onclick="viewProduct(${product.id})">
                <h3>${product.name}</h3>
                <p>R$${product.price}</p>
               
            `;
            productList.appendChild(productElement);
        });
    }

    // Função para adicionar produto ao carrinho
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produto Adicionado ao Carrinho!');
    }

    // Função para adicionar produto aos favoritos
    function addToFavorites(productId) {
        const product = products.find(p => p.id === productId);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favoritoses));
        alert('Produto Adicionado ao Carrinho!');
    }

    // Função para redirecionar para a página de detalhes do produto
    window.viewProduct = function(productId) {
        localStorage.setItem('selectedProduct', productId);
        window.location.href = 'produto.html';
    }

    renderProducts();
});
document.getElementById('toggleButton').addEventListener('click', function() {
    var optionsMenu = document.getElementById('optionsMenu');
    if (optionsMenu.classList.contains('hidden')) {
        optionsMenu.classList.remove('hidden');
    } else {
        optionsMenu.classList.add('hidden');
    }
});

