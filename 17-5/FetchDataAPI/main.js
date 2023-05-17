// API https://fakestoreapi.com/products

async function getAll() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

async function fetchData() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.getElementById("products");
  for (let item of products) {
    productsDiv.innerHTML += `
    <div class="im">
    <p>${item.id}</p>
    <h2>${item.title}</h2>
    <img src="${item.image}"></img>
    </div>
    ;`;
  }
}
