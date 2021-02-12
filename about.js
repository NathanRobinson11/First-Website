let about1 = document.getElementById('about1');
let about2 = document.getElementById('about2');
let about3 = document.getElementById('about3');
let about4 = document.getElementById('about4');
let about5 = document.getElementById('about5');
let about6 = document.getElementById('about6');

about1.addEventListener('click',()=>{
    if(about1.src == 'http://127.0.0.1:5500/salerno.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno3.jpg';
    } else if(about1.src == 'http://127.0.0.1:5500/salerno3.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno4.jpg';
    } else if(about1.src = 'http://127.0.0.1:5500/salerno4.jpg'){
        about1.src = 'http://127.0.0.1:5500/salerno.jpg';
    }
});


about2.addEventListener('click',()=>{
    if(about2.src == 'http://127.0.0.1:5500/images/nathan.jpg'){
        about2.src = 'http://127.0.0.1:5500/images/beach.jpg';
    }else if (about2.src == 'http://127.0.0.1:5500/images/beach.jpg'){
        about2.src = 'http://127.0.0.1:5500/images/dogs.jpg';
    }else if (about2.src == 'http://127.0.0.1:5500/images/dogs.jpg'){
        about2.src = 'http://127.0.0.1:5500/images/nathan.jpg';
    }
});

about3.addEventListener('click', () =>{
    if(about3.src == 'http://127.0.0.1:5500/images/liverpool.jpg'){
        about3.src = 'http://127.0.0.1:5500/images/henderson.jpg';
    }else if(about3.src == 'http://127.0.0.1:5500/images/henderson.jpg'){
        about3.src = 'http://127.0.0.1:5500/images/klopp.jpg';
    }else if(about3.src == 'http://127.0.0.1:5500/images/klopp.jpg'){
        about3.src = 'http://127.0.0.1:5500/images/liverpool.jpg';
    }
});


about4.addEventListener('click', () =>{
    if(about4.src == 'http://127.0.0.1:5500/images/edgehill.jpg'){
        about4.src = 'http://127.0.0.1:5500/images/edgehill2.jpg';
    }else if(about4.src == 'http://127.0.0.1:5500/images/edgehill2.jpg'){
        about4.src = 'http://127.0.0.1:5500/images/edgehill3.jpg';
    }else if(about4.src == 'http://127.0.0.1:5500/images/edgehill3.jpg'){
        about4.src = 'http://127.0.0.1:5500/images/edgehill.jpg';
    }
});


about5.addEventListener('click', () =>{
    if(about5.src == 'http://127.0.0.1:5500/images/office.jpg'){
        about5.src = 'http://127.0.0.1:5500/images/rick.jpg';
    }else if(about5.src == 'http://127.0.0.1:5500/images/rick.jpg'){
        about5.src = 'http://127.0.0.1:5500/images/southpark.jpg';
    }else if(about5.src == 'http://127.0.0.1:5500/images/southpark.jpg'){
        about5.src = 'http://127.0.0.1:5500/images/office.jpg';
    }
});

about6.addEventListener('click', () =>{
    if(about6.src == 'http://127.0.0.1:5500/images/rodger.jpg'){
        about6.src = 'http://127.0.0.1:5500/images/bolt.jpg';
    }else if(about6.src == 'http://127.0.0.1:5500/images/bolt.jpg'){
        about6.src = 'http://127.0.0.1:5500/images/ivey.jpg';
    }else if(about6.src == 'http://127.0.0.1:5500/images/ivey.jpg'){
        about6.src = 'http://127.0.0.1:5500/images/rodger.jpg';
    }
});