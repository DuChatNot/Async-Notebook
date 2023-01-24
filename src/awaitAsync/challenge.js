import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData (urlApi){
    const r = await fetch(urlApi);
    const data = await r.json();
    return data;
}

const f = async (urlApi) =>{
    try {
        /*orden de ejecución:*/ 
        /* 1 */ const prods = await fetchData(`${API}/products`) //Se accede a API/products y la información se guarda en "prods"
        /* 2 */ const singleProd = await fetchData(`${API}/products/${prods[0].id}`) //Se accede a API/products/ID (del primer objeto)
        /* 3 */ const cat = await fetchData(`${API}/categories/${singleProd.category.id}`); //Se accede al ID del objeto/elemento category del primer elemento del array de "products"

        console.log(prods)
        console.log(singleProd.title)
        console.log(cat.name)

    } catch (err){ //En caso de que fetch no pueda acceder a la API o exista algun problema, el código corre este bloque de error
        console.error(err);
    }
}

f(API);