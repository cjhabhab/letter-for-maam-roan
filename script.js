let form = document.getElementById("passwordForm");
let password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (password.value === "Maem Roan Mabuti") {
    window.location.href = "letter.html";
  } else {
    alert("Incorrect password! Please try again.");
  }
});
