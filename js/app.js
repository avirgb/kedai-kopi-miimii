document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id:1, name:'Arabika', img:'product-arabika.jpg', price: 35000},
            {id:2, name:'Robusta', img:'product-robusta.jpg', price: 40000},
            {id:3, name:'Liberika', img:'product-liberika.jpg', price: 45000},
            {id:4, name:'Java Preanger', img:'product-java.jpg', price: 55000},
            {id:5, name:'Bali Kintamani', img:'product-bali.jpg', price: 65000},
        ],
    }))
})