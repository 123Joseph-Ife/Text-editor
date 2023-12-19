var radiusbar = document.querySelector("#radiusbar");
var colorbar = document.querySelector("#colorbar");
var widthbar = document.querySelector("#widthbar");
var heightbar = document.querySelector("#heightbar");


var radiusresult = document.querySelector("#radiusresult");

radiusresult.innerHTML = radiusbar.value + '%';

var colorresult = document.querySelector("#colorresult");

var box = document.querySelector("#box");

box.style.borderRadius = radiusbar.value / 2 + '%';

colorresult.innerHTML = colorbar.value;
var box = document.querySelector("#box");
box.style.backgroundColor = colorbar.value;

var widthresult = document.querySelector("#widthresult");
widthresult.innerHTML = widthbar.value

var heightresult = document.querySelector("#heightresult");
heightresult.innerHTML = heightbar.value + '%'
var box = document.querySelector("#box");
box.style.height = heightbar.value + '%';

box.style.boxShadow = `12px 12px 12px ${colorbar.value}`;
//box.style.boxShadow = "12px 12px 12px green"
radiusbar.addEventListener("change", () => {
    var box = document.querySelector("#box");
    box.style.borderRadius = radiusbar.value / 2 + '%';
    radiusresult.innerHTML = radiusbar.value + '%';
})

colorbar.addEventListener("change", () => {
    var box = document.querySelector("#box");
    box.style.backgroundColor = colorbar.value;
    colorresult.innerHTML = colorbar.value;
    box.style.boxShadow = `12px 12px 12px linear-gradient(30deg, ${colorbar.value}, red) inset`;
})


widthbar.addEventListener("change", () => {
    var box = document.querySelector("#box");
    box.style.width = widthbar.value + '%';
    widthresult.innerHTML = widthbar.value + '%';
})

heightbar.addEventListener("change", () => {
    var box = document.querySelector("#box");
    box.style.height = heightbar.value + '%';
    heightresult.innerHTML = heightbar.value + '%';
})
