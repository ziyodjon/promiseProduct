import * as api from '../js/api.js';

const productWrap = document.querySelector('.card-deck');

const importantProducts = [1,4,7,10,2,5];
function getImportantProducts(importantProducts){
    let allPromise = [];
    importantProducts.forEach((prodId,idx) => {
        allPromise[idx] = api.getOneProduct(prodId);
    });

    return allPromise;
}

const test =  getImportantProducts(importantProducts);

Promise.all(test).then(data => {
    data.forEach(product => {
        console.log(product);
        productWrap.innerHTML += `
        <div class='col-lg-4 item'>
            <div class="card">
                <div class='price badge badge-pill badge-danger'>${product.price}$</div>
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title line-clamp-caption">${product.title}</h5>
                    <p class="card-text line-clamp-desc">${product.description}</p>
                    <p class="card-text">Category: <small class="badge badge-secondary"> ${product.category}</small></p>
                    <a href="#" class="btn btn-success float-right">Купить</a>
                </div>
                <div class="card-footer">
                    <small class="badge badge-pill badge-secondary float-left">Rating: ${product.rating.rate}</small>
                    <small class="badge badge-pill badge-warning float-right">Rating count: ${product.rating.count}</small>
                </div>
            </div>
        </div>
        `;
    });
});

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

//api.getOneProduct(1).then(product => console.log(product))