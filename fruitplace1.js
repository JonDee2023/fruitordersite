let hd = document.getElementById("biz-name");
hd.innerText = "FarmHouse.ng";

//const menuBtn = document.getElementById("menuBtn");
//const navBar = document.getElementById("navBar");

//menuBtn.addEventListener("click", function () {
//  if (navBar.style.display === "block") {
//    navBar.style.display = "none";
//  } else {
//    navBar.style.display = "block";
//  }
//}); 

const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navBar");

/* Toggle menu */
menuBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent triggering document click
  navBar.classList.toggle("show");
});

/* Close when clicking outside */
document.addEventListener("click", function (e) {
  if (!navBar.contains(e.target) && !menuBtn.contains(e.target)) {
    navBar.classList.remove("show");
  }
});