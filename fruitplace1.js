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

const contents1 = [
    {img: "img1.webp"},
    {img: "fruit-1.jpg"},
    {img: "fruit-2.jpg"},
    {img: "fruit-3.jpg"},
    {img: "jumia2.gif"}
    
]

let index = 0;

function changeAd1(){
    index = (index+1) %
    contents1.length;

    document.getElementById("card-img1").src = contents1[index].img;

}

// set interval to change every 5s
setInterval(changeAd1, 5000);

const contents2 = [
    {img: "fruit-7.webp"},
    {img: "fruit-8.webp"},
    {img: "img10.webp"},
    {img: "img10.jpg"},
    {img: "jumia3.jpg"}
]

let i = 0;

function changeAd2(){
    i = (i+1) %
    contents2.length;

    document.getElementById("card-img2").src = contents2[i].img;

}

// set interval to change every 10s
setInterval(changeAd2, 10000);


const contents3 = [
    {img: "jumia4.jpg"},
    {img: "fruit-8.webp"},
    {img: "img5.webp"},
    {img: "img6.webp"},
    {img: "fruit4.jpg"}
]

let ind = 0;

function changeAd3(){
    ind = (ind+1) %
    contents3.length;

    document.getElementById("card-img3").src = contents3[ind].img;

}

// set interval to change every 5s
setInterval(changeAd3, 10000);




document.getElementById("itm-aboutus").addEventListener("click", function (e){
    window.open('aboutus.html', "_blank")

});

document.getElementById("itm-health-tips").addEventListener("click", function (e){
    window.open('healthtips.html', "_blank")

});

document.getElementById("itm-fruits").addEventListener("click", function (e){
    window.open('fruits.html', "_blank")

});

document.getElementById("itm-lifestyle").addEventListener("click", function (e){
    window.open('lifestyle.html', "_blank")

});

document.getElementById("itm-news").addEventListener("click", function (e){
    window.open('news.html', "_blank")

});



