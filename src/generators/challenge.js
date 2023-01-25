//Generador asíncrono
//Obtiene datos de una API

import fetch from 'node-fetch'; 
const API = 'https://api.escuelajs.co/api/v1';

function* gen(){
    yield fetch(`${API}/products`)
    .then(response => response.json())
    .then(prod => console.log('Product Title: ' +prod[0].title));

    yield fetch(`${API}/categories`)
    .then(response => response.json())
    .then(cat => console.log('Category Name: ' +cat[0].name))

    yield fetch(`${API}/products/1`)
    .then(response => response.json())
    .then(sp => console.log('Price: ' +sp.price));

};

const a = gen();
a.next()
a.next()
a.next()






