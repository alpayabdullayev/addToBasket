let btnClick = document.getElementById('btnClick');
let modal = document.getElementById('modal');
let form = document.getElementById('form');
let nameInput = document.getElementById('nameInput');
let brandInput = document.getElementById('brandInput');
let categoryInput = document.getElementById('categoryInput');
let priceInput = document.getElementById('priceInput');
let btnSubmit = document.getElementById('btnSubmit');
let body = document.querySelector('body');


let products = [];
let wishlist = [];

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    let nameInputValue = nameInput.value;
    let brandInputValue = brandInput.value;
    let categoryInputValue = categoryInput.value;
    let priceInputValue = priceInput.value;


    id = 0
    const product = {
        id: id,
        name: nameInputValue,
        category: categoryInputValue,
        brand: brandInputValue,
        price: parseFloat(priceInputValue)
    };

    id++;
    products.push(product);

    let card = document.createElement('div');

    if (nameInputValue.trim() === '' || brandInputValue.trim() === '' || priceInputValue.trim() === '' || categoryInputValue.trim() === '') {
        alert('Inputlari tam doldurun');
        return;
    } else {
        body.appendChild(card);
    }

    card.innerHTML = `
    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">${nameInputValue}</h5>
            <p class="card-text">${brandInputValue}</p>
            <p class="card-text">${categoryInputValue}</p>
            <p class="card-text">${priceInputValue}</p>
            <button onclick="addToWishlist(${JSON.stringify(product).split('"').join("&quot;")})" class="btn btn-primary">Add to Wishlist</button>
        </div>
    </div>
`;
    name.value = ""
    // form.reset();
});
function addToWishlist(product) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    const wishlistContainer = document.getElementById('wishlistContainer');
    wishlistContainer.innerHTML = '';
    
    wishlist.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h5>${product.name}</h5>
            <p>${product.brand}</p>
            <p>${product.category}</p>
            <p>${product.price}</p>
        `;
        wishlistContainer.appendChild(productDiv);
    });
    
}
const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));












