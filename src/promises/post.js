import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data){
    const r = fetch(urlApi, { //Se implementa un objeto configurado para que fetch en lugar de traer información, la postee (post)
        //Get: Obtener   Post: Enviar   Put: Actualizar  Delete: Eliminar
        method:'POST', //En mayúsculas
        mode: 'cors', //Permisos
        credentials: 'same-origin', //Standar de autenticación
        headers: { //Cabeceras para reconocimiento
            'Content-Type':'application/json' //Tipo de valor que se esta enviando 
        },
        body: JSON.stringify(data) //Información a transmitir, stringify transforma la info a texto
    });
    return r; 
}

const data = { //Objeto a postear en el sitio WEB
    "title": "Golden Salmon",
    "price": 101010,
    "description": "It's golden bruh!",
    "categoryId": 1,
    "images": ["https://www.pexels.com/es-es/foto/mar-agua-azul-oceano-4322433/"]
};

postData(`${API}/products`, data)
    .then(response => response.json()) //transforma la respuesta del servidor 
    .then(d => console.log(d)); //Imprime la respuesta transformada (para verificar conexión)
