// adding timeOut to experience page

let r2r = document.getElementById('r2r');
let fylde = document.getElementById('fylde');
let knowsley = document.getElementById('knowsley');
let ibl = document.getElementById('ibl');


r2r.style.visibility = "hidden";
fylde.style.visibility = "hidden";
knowsley.style.visibility = "hidden";
ibl.style.visibility = "hidden";

setTimeout (function (){
    r2r.style.visibility = "visible";
}, 1000);

setTimeout (function (){
    fylde.style.visibility ="visible";
}, 2000);

setTimeout (function (){
    knowsley.style.visibility ="visible";
}, 3000);

setTimeout (function (){
    ibl.style.visibility ="visible";
}, 4000);
