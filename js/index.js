import * as api from '../js/api.js';

const productWrap = document.querySelector('.card-deck');

const importantProducts = [1,4,7,10,2,5,11,14,16];

function getImportantProducts(importantProducts){
    return importantProducts.map(prodId => api.getOneProduct(prodId));
}

const importantProductsResult =  getImportantProducts(importantProducts);

Promise.all(importantProductsResult).then(data => {
    data.forEach(product => {
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
