
function getOneProduct(productId) {
    return new Promise((resolve, reject) => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(product => {
          resolve(product);
        })
        .catch(error => {
          reject(`Error fetching product data: ${error.message}`);
        });
    });
  }
  
export {getOneProduct};
