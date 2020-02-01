(function() {
    let mockDatabase = [
        {
            title: 'test product 1',
            price: '5$',
            id: 1,
            tag:'sock',
            img: ''
        },
        {
            title: 'test product 2',
            price: '12$',
            id: 2,
            tag:'shirt',
            img: ''
        },
        {
            title: 'test product 3',
            price: '7$',
            id: 3,
            tag: 'pants',
            img: ''
        },
        {
            title: 'test product 4',
            price: '25$',
            id: 4,
            tag: "sock",
            img: ''
        },
        {
            title: 'test product 5',
            price: '25$',
            id: 5,
            tag:'sock',
            img: ''
        },
        {
            title: 'test product 6',
            price: '15$',
            id: 6,
            tag:'shirt',
            img: ''
        },
        {
            title: 'test product 7',
            price: '5$',
            id: 7,
            tag:'pants',
            img: ''
        },
        {
            title: 'test product 8',
            price: '16$',
            id: 8,
            tag:'pant',
            img: ''
        },
        {
            title: 'test product 9',
            price: '90$',
            id: 9,
            tag:'shirt',
            img: ''
        },
    ]

    function renderProducts (results) {
		const productContainer = document.querySelector('.products-container');

        productContainer.innerHTML = '';

		const products = results.map(function (product, index) {
            return (
                `<div class="product">
                    <img class="product__img" src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422989/item/goods_62_422989.jpg?width=380"></img>
                    <h1 class="product__title">${product.title}</h1>
                    <h3 class="product__price">${product.price}</h3>
                </div>`
            )
        });
        
		products.forEach(function (product) {
			productContainer.innerHTML += product;
		});
	}

	renderProducts(mockDatabase);

    document.querySelector('.filter-by-price').addEventListener('change', function(){
        if (this.value == 'LOW-HIGH') {
            // mockDatabase.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            mockDatabase = mockDatabase.filter(product => product.price > '50');            
            renderProducts(mockDatabase);
        } if (this.value == 'HIGH-LOW') {
            mockDatabase.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            renderProducts(mockDatabase);
        }
    });
    
}())