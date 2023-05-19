const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

async function getAll() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

async function fetchSingleDataDetails() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.querySelector(".grid-container");

  for (let item of products) {
    productsDiv.innerHTML += `
      <div class="grid-item" onclick="goToDetail(${item.id})">
                  <img src="${item.image}" alt="" />
                  <div class="name_price">${item.title}</div>
                  <div class="name_price">${item.price}</div>
                </div>`;
  }
}

fetch(`https://fakestoreapi.com/products/${id})
            .then(res=>res.json())
            .then(json=>console.log(json)`);
