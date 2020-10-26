const section = document.getElementById('productsList');

const products= [
    {
        title: 'Conjunto The Rave',
        price: 899,
        img: '/assets/img/items/h3.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Camisa de Pinos',
        price: 499,
        img: '/assets/img/items/m1.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Playera Casual',
        price: 299,
        img: '/assets/img/items/h1.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Playera The King',
        price: 499,
        img: '/assets/img/items/h2.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Blusa roja',
        price: 799,
        img: '/assets/img/items/m2.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Conjunto The Paps',
        price: 799,
        img: '/assets/img/items/h4.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Chamarra de Mezclilla',
        price: 799,
        img: '/assets/img/items/m4.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Falda de Mezclilla',
        price: 799,
        img: '/assets/img/items/m3.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'The new CEO',
        price: 799,
        img: '/assets/img/items/h5.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Conjunto The Spy',
        price: 799,
        img: '/assets/img/items/m5.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Playera The King',
        price: 499,
        img: '/assets/img/items/h2.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Camisa de Pinos',
        price: 499,
        img: '/assets/img/items/m1.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Playera Casual',
        price: 299,
        img: '/assets/img/items/h1.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Chamarra de Mezclilla',
        price: 799,
        img: '/assets/img/items/m4.jpg',
        description: 'Una breve descripción'    
    },
    {
        title: 'Conjunto The Rave',
        price: 899,
        img: '/assets/img/items/h3.jpg',
        description: 'Una breve descripción'        
    },
    {
        title: 'Blusa roja',
        price: 799,
        img: '/assets/img/items/m2.jpg',
        description: 'Una breve descripción'    
    },
];

function renderProducts() {
    let output = products.map(product => {
        return `
        <div class="card">
            <figure class="card__picture">
                <img src="${product.img}" alt="">
            </figure>
            <article class="card__description">
                <div class="card__info">
                    <p class="card__title">${product.title}</p>
                    <p class="card__price">$${product.price}</p>
                </div>
                <p class="paragraph">${product.description}</p>
            </article>
        </div>
        `
    }).join('');
    section.innerHTML = output;
}

renderProducts();