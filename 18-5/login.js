async function getAllUser() {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}

async function fetchData() {
  const products = await getAllUser();
  console.log(products);

  const productsDiv = document.querySelector(".grid-container");

  for (let item of products) {
    productsDiv.innerHTML += `
      <div class="grid-item" onclick="goToDetail(1)">
                  <img src="${item.image}" alt="" />
                  <div class="name_price">${item.title}</div>
                  <div class="name_price">${item.price}</div>
                </div>`;
  }
}

// document.querySelector(".btn-login").disabled = true;

// function disabledLogin() {
//   var u = document.querySelector(".username").value;
//   var p = document.querySelector(".password").value;
//   if (u.length > 0 && p.length > 0)
//     document.querySelector(".btn-login").disabled = false;
//   else document.querySelector(".btn-login").disabled = true;
// }



function checkLogin() {
    let username = document.getElementsByClassName("username").value;
let password = document.getElementsByClassName("password").value;
console.log(username,password);

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      // expiresInMins: 60, // optional
    }),
  })
    .then(function (response) {
      console.log(response);
      if (response.status !== 200) {
        console.log("Lỗi, mã lỗi " + response.status);
        return;
      }
      // parse response data
      response.json().then((data) => {
        console.log(data);
      });
    })
    .catch((err) => {
      console.log("Error :-S", err);
    });
}
