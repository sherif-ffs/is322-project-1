(function() {
    let mockDatabase = [
        {
            title: 'Cotton Pique Socks',
            price: '5$',
            id: 1,
            tag:'sock',
            img: 'assets/products-photos/black_socks.jpg'
        },
        {
            title: 'Crew Neck T-shirt',
            price: '12$',
            id: 2,
            tag:'shirt',
            img: 'assets/products-photos/orange_shirt.jpg'
        },
        {
            title: 'Cotton longsleeve T-shirt',
            price: '15$',
            id: 3,
            tag: 'shirt',
            img: 'assets/products-photos/pink_longsleeve.jpg'
        },
        {
            title: 'Men Slub Socks',
            price: '8$',
            id: 4,
            tag: "sock",
            img: 'assets/products-photos/yellow_socks.jpg'
        },
        {
            title: 'Crew Neck T-shirt',
            price: '12$',
            id: 6,
            tag:'shirt',
            img: 'assets/products-photos/blue_shirt.jpg'
        },
        {
            title: 'Chino Shorts',
            price: '30$',
            id: 7,
            tag:'pants',
            img: 'assets/products-photos/chino_shorts.jpg'
        },
        {
            title: 'Slim Chino Pants',
            price: '45$',
            id: 8,
            tag:'pants',
            img: 'assets/products-photos/chino_pants.jpg'
        },
        {
            title: 'Cotton V-neck T-shirt',
            price: '35$',
            id: 9,
            tag:'shirt',
            img: 'assets/products-photos/yellow_vneck.jpg'
        },
        {
            title: `Men's Striped Socks`,
            price: '10$',
            id: 5,
            tag:'sock',
            img: 'assets/products-photos/red_socks.jpg'
        },
        {
            title: `Slim Fit Jeans`,
            price: '40$',
            id: 10,
            tag:'pants',
            img: 'assets/products-photos/slim_fit_jeans.jpg'
        },
    ]

    function renderProducts (results) {
		const productContainer = document.querySelector('.products-container');

        productContainer.innerHTML = '';

		const products = results.map(function (product, index) {
            return (
                `<div class="product">
                    <img class="product__img" src="${product.img}"></img>
                    <div class="product-information">
                        <h3 class="product-information__title">${product.title}</h3>
                        <h1 class="product-information__price">${product.price}</h1>
                    </div>
                </div>`
            )
        });
        
		products.forEach(function (product) {
			productContainer.innerHTML += product;
		});
	}

	renderProducts(mockDatabase);

    // Update database to be rendered/sorted/filtered
    let filteredDatabase = mockDatabase;

    // Sort by price
    document.querySelector('.sort-by-price').addEventListener('change', function(){
        if (this.value == 'LOW-HIGH') {
            filteredDatabase.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            renderProducts(filteredDatabase);
        } if (this.value == 'HIGH-LOW') {
            filteredDatabase.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            renderProducts(filteredDatabase);
        }
    });

    // Filter by article of clothing
    document.querySelector('.filter-by-article').addEventListener('change', function(){
        if (this.value == 'SHIRT') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'shirt'); 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
        } if (this.value == 'PANTS') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'pants');     
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
        } if (this.value == 'SOCKS') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'sock'); 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
        } if (this.value == "ALL") {
            filteredDatabase = mockDatabase; 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(mockDatabase);
        }
    });
    
}())