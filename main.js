/*getElementById using button in html
function x() {
    var a=document.getElementById("prakash");
    a.style.color="limegreen";
    a.style.backgroundColor="black";
    a.style.fontSize="150px";
}
//addEventListener
function s() {
    b.style.color = "red";
    d1.style.backgroundColor = "black";
}
function t() {
    a.style.color = "blue";
    c1.style.backgroundColor = "black";
}
let a = document.getElementById("a");
let c1 = document.getElementById("c1");
let b = document.getElementById("b");
let d1 = document.getElementById("d1");

//a.addEventListener("click", s);
//b.addEventListener("click", t);

a.addEventListener("click", s);
b.addEventListener("click", t);
//a.removeEventListener("mouseover", s);
//b.removeEventListener("mouseover", t);

function x(){
    a.style.color="green";
    a.style.backgroundColor="black";
}
function y(){
    b.style.color="red";
    b.style.backgroundColor="black";
}
let a = document.getElementById("a");
let b = document.getElementById("b");*/


var img=document.querySelector("img");
img.onclick=function() {
    var src=img.getAttribute("src");
    if(src==="../DOM/img/bulb.off.png"){
        img.setAttribute("src","../DOM/img/bulb.on.png");
    }
    else{
        img.setAttribute("src","../DOM/img/bulb.off.png");
    }
    
}

