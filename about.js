let about1 = document.getElementById('about1');
let about2 = document.getElementById('about2');
let about3 = document.getElementById('about3');
let about4 = document.getElementById('about4');
let about5 = document.getElementById('about5');
let about6 = document.getElementById('about6');

about1.addEventListener('click',()=>{
    console.log(about1.src);

    if(about1.src == 'http://127.0.0.1:5500/salerno.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno3.jpg';
        console.log(`yes`);
    } else if(about1.src == 'http://127.0.0.1:5500/salerno3.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno4.jpg';
        console.log(`hello`);
    } else if(about1.src = 'http://127.0.0.1:5500/salerno4.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno.jpg';
    }
});

