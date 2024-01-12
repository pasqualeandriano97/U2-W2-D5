let currentYear = new Date().getFullYear();

document.getElementById("htmlSpan").innerHTML = currentYear;

const toprofile = function () {
  const profileIcon = document.getElementById("avatarIcon");
  profileIcon.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");
    window.location.href = "./profile.html";
  });
};
toprofile();
