import fetch from 'node-fetch'; //Trae el módulo/función fetch para que se pueda usar
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi); //fetch es una función asíncrona (promesa) la cual provee una interfaz para acceder y manipular una API (evolución del xmlhttprequest)
}                         //fetch devuelve la respuesta de la url en forma de objeto (llamado " response ") y es necesario importarlo de "node-fetch" para poder usarlo en un editor de código

fetchData(`${API}/products`)
    .then(r => r.json()) //La respuesta debe ser pasada a formato json, de lo contrario no se puede leer el contenido como tal
    .then (p => {
        console.log(p);
    })
    .catch(e => console.log(e));

//Utilizando el Callback-Hell:

import fetch from 'node-fetch'; //Trae el módulo fetch para que se pueda usar (fetch() es una promesa que 'roba' información)
const API2 = 'https://api.escuelajs.co/api/v1'; //Nombrada API2 para no causar interferencia con la variable anterior (API)

function fetchData(urlApi){
    return fetch(urlApi);
}    

fetchData(`${API2}/products`) //Primer petición... Entra a la URL dada y "roba" toda la información
    .then(response => response.json()) //Dicha información guardala en la variable "response" y pasala a formato .json (para poder leerla)
    .then(prod => { //Pasa la variable "response" a una variable llamada "prod"
        console.log(prod); //Imprime prod (En este momento se despliega una lista gigante de productos, los cuales estan en API2/products [navegador WEB])
        return fetchData(`${API2}/products/${prod[0].id}`) //Segunda petición... Entra a API2/products/ID del primer elemento de la lista gigante de productos (el producto al ser un objeto, cuenta con una propiedad llamada ID, es por eso que se accede por medio de .id)
    })
    .then(response => response.json()) //Pasa esa informacion (la cual es el objeto 1 de la lista pero aislado) encontrada en API2/products/11(id del objeto) a formato .json
    .then(p => {  //Pasa esa informacion .json a la variable "p" (Todo el objeto aislado)
        console.log(p.title); //Imprime la propiedad title del objeto aislado
        return fetchData(`${API2}/categories/${p.category.id}`) //Tercer petición... Entra en API2/categories/ID de la propiedad "category" que a su vez es otro objeto, es decir, el objeto aislado "p" tiene una propiedad de nombre category la cual es un objeto (objeto dentro de un objeto)
    })
    .then(resp => resp.json()) //Transforma esa información a .json
    .then(cat => { //Pasa esa informacion en .json a la variable "cat"
        console.log(cat.name); //Imprime la propiedad "name" de la variable cat (la cual es la propiedad "category" del objeto "p" aislada)
    })
    .catch(err => console.log(err)) //En caso de error imprime el error (err)
    //(OPCIONAL)// .finally(() => console.log('Terminado')); //Imprime el mensaje cuando termine el proceso

