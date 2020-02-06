(function() {
    let mockDatabase = [
        {
            title: 'Cotton Pique Socks',
            price: '5$',
            id: 0,
            tag:'sock',
            img: 'assets/products-photos/black_socks.jpg'
        },
        {
            title: 'Crew Neck T-shirt',
            price: '12$',
            id: 1,
            tag:'shirt',
            img: 'assets/products-photos/orange_shirt.jpg'
        },
        {
            title: 'Cotton longsleeve T-shirt',
            price: '15$',
            id: 2,
            tag: 'shirt',
            img: 'assets/products-photos/pink_longsleeve.jpg'
        },
        {
            title: 'Men Slub Socks',
            price: '8$',
            id: 3,
            tag: "sock",
            img: 'assets/products-photos/yellow_socks.jpg'
        },
        {
            title: 'Crew Neck T-shirt',
            price: '12$',
            id: 4,
            tag:'shirt',
            img: 'assets/products-photos/blue_shirt.jpg'
        },
        {
            title: 'Chino Shorts',
            price: '30$',
            id: 5,
            tag:'pants',
            img: 'assets/products-photos/chino_shorts.jpg'
        },
        {
            title: 'Slim Chino Pants',
            price: '45$',
            id: 6,
            tag:'pants',
            img: 'assets/products-photos/chino_pants.jpg'
        },
        {
            title: 'Cotton V-neck T-shirt',
            price: '35$',
            id: 7,
            tag:'shirt',
            img: 'assets/products-photos/yellow_vneck.jpg'
        },
        {
            title: `Men's Striped Socks`,
            price: '10$',
            id: 8,
            tag:'sock',
            img: 'assets/products-photos/red_socks.jpg'
        },
        {
            title: `Slim Fit Jeans`,
            price: '40$',
            id: 9,
            tag:'pants',
            img: 'assets/products-photos/slim_fit_jeans.jpg'
        },
    ]

    function renderProducts (results) {
		const productContainer = document.querySelector('.products-container');

        productContainer.innerHTML = '';

		const products = results.map(function (product, index) {
            return (
                `
                <div class="product">
                    <img class="product__img" src="${product.img}" id="${index}"></img>
                    <div class="product-information">
                        <h3 class="product-information__title">${product.title}</h3>
                        <h1 class="product-information__price">${product.price}</h1>
                    </div>
                </div>
                
                <!-- START OF MODAL -->
                <div id="${index}content" class="modal">
                <div class="modal-content">
                    <div class="modal-img-container">
                    <img src="${product.img}" alt="" class="modal-img">
                    </div>
                    <div class="modal-product-information">
                    <span class="close" id="${index}close" >&times;</span>
                        <h1 class="modal-product-information__title">${product.title}</h1>
                        <h3 class="modal-product-information__price">${product.price}</h3>
                        <p class="label label-color">Color: </p>
                        <div class="modal-product-colors-container">
                            <div class="color" style="background-color: #DDA15E"></div>
                            <div class="color" style="background-color: #353B3C"></div>
                            <div class="color" style="background-color: #D64933"></div>
                            <div class="color" style="background-color: #2B303A"></div>
                            <div class="color" style="background-color: #0C7C59"></div>
                            <div class="color" style="background-color: #B9314F"></div>
                        </div>
                        <p class="label label-size">Size: </p>
                        <div class="modal-product-sizes-container">
                            <div class="size">
                                <p>XXS</p>                            
                            </div>
                            <div class="size">
                                <p>XS</p>                            
                            </div>
                            <div class="size">
                                <p class="single">S</p>                            
                            </div>
                            <div class="size">
                                <p>M</p>                            
                            </div>
                            <div class="size">
                                <p class="single">L</p>                            
                            </div>
                            <div class="size">
                                <p>XL</p>                            
                            </div>
                            <div class="size">
                                <p>XXL</p>                            
                            </div>
                            <div class="size">
                                <p>3XL</p>                            
                            </div>
                        </div>
                <button class="modal-product-button">Add To Bag</button>
                    </div>
                </div>
                </div>
                <!-- END OF MODAL -->
                `
            )
        });
        
		products.forEach(function (product) {
			productContainer.innerHTML += product;
		});
	}

	renderProducts(mockDatabase);


    // FILTER/SORT/SEARCH FUNCTIONS
    const searchBar = document.querySelector('.search-container__search-bar');    

    document.querySelector('.search-container__button').addEventListener('click', searchProducts)
    document.querySelector('.sort-by-price').addEventListener('change', sortByPrice);
    document.querySelector('.filter-by-article').addEventListener('change', filterByArticle);

    // add event listener to enter key
    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          searchProducts();
        }
    });

    // Update database to be rendered/sorted/filtered
    let filteredDatabase = mockDatabase;

    function searchProducts() {
        let searchInput = searchBar.value;
        filteredDatabase = mockDatabase.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()));
        if (filteredDatabase.length == 0 || searchInput == 'all') {
            renderProducts(mockDatabase);
        }
        renderProducts(filteredDatabase);
        grabProducts();
    }

    function sortByPrice() {
        if (this.value == 'LOW-HIGH') {
            filteredDatabase.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            renderProducts(filteredDatabase);
            grabProducts();
        } if (this.value == 'HIGH-LOW') {
            filteredDatabase.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            renderProducts(filteredDatabase);
            grabProducts();
        }
    }

    function filterByArticle() {
        if (this.value == 'SHIRT') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'shirt'); 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
            grabProducts();
        } if (this.value == 'PANTS') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'pants');     
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
            grabProducts();
        } if (this.value == 'SOCKS') {
            filteredDatabase = mockDatabase.filter(product => product.tag == 'sock'); 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(filteredDatabase);
            grabProducts();
        } if (this.value == "ALL") {
            filteredDatabase = mockDatabase; 
            document.querySelector('.sort-by-price').value = 'DEFAULT';           
            renderProducts(mockDatabase);
            grabProducts();
        }
    }

    
function grabProducts() {
    for (let i=0; i<10; i++) {
        document.getElementById(`${i}`).addEventListener('click', function() {
            showmodal(`${i}`)
        });
        if (document.getElementById(`${i}close`)) {
            document.getElementById(`${i}close`).addEventListener('click', function() {
                closeModal(`${i}`)
            });
        }         
    }
}

grabProducts();

function showmodal(id) {
    document.getElementById(id+'content').style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id+'content').style.display = "none";
}


}())