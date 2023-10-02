// JavaScript Document
console.log("hi");


function rightScroll() {
    const left = document.querySelector(".trending-deze-week ul");
    left.scrollBy(300, 0);
}
function leftScroll() {
    const right = document.querySelector(".trending-deze-week ul");
    right.scrollBy(-300, 0);
}
scrollBy(x - coord, y - coord)