

  // function checkLogin() {
  //   let username = document.querySelector(".username").value;
  //   let password = document.querySelector(".password").value;
  //   fetch("https://dummyjson.com/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       if (response.status !== 200) {
  //         console.log("Lỗi, mã lỗi " + response.status);
  //         return;
  //       }
  //       // parse response data
  //       response.json().then((data) => {
  //         console.log(data.token);
  //         if (
  //           data.token != null ||
  //           data.token != undefined ||
  //           data.token != ""
  //         ) {
  //           localStorage.setItem("token", data.token);
  //           window.location.assign("./index.html");
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error :-S", err);
  //     });
  // }
  function checkLogin() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
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
          console.log(data.token);
          if (data.token != null || data.token != undefined || data.token != "") {
            localStorage.setItem("token", data.token);
            window.location.assign("./index.html");
          }
        });
      })
      .catch((err) => {
        console.log("Error :-S", err);
      });
  }

function logOut() {
  // const token = localStorage.getItem("token");
  // localStorage.removeItem(token);
  localStorage.removeItem("token");
  console.log("success!");
  // console.log(token);
  window.location.assign("./login.html");
  // console.log(token);
}
// function checkToken() {
//   var token = localStorage.getItem("token");
//   if (token != null || token != "") {
//     window.location.assign("./index.html");
//   }
// }

// window.onload(checkToken());
