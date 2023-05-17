id_FirstName = document.getElementById("first_name");
id_LastName = document.getElementById("last_name");
id_Email = document.getElementById("email");
id_Address = document.getElementById("address");
id_Telephone = document.getElementById("telephone");

function clearForm() {
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("telephone").value = "";
}

function closeSetting() {
  document.getElementById("back_site").style["display"] = "none";
}
