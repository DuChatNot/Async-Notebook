const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Puede importar el módulo del ID utilizado (XMLHTTPRequest) para manipular la API, es necesario agregarle la extensión .XMLHttpRequest para que funcione
const API = 'https://api.escuelajs.co/api/v1'; //Llamado / Referencia al root del API (URL)

function fetchData( urlAPI, callback ){ // urlAPI = cualquier API con la que se esté trabajando
                                        // callback = parámetro que recibirá una función posteriormente para controlar el flujo de información de la API

    let x = new XMLHttpRequest(); //Creamos un espacio de memoria para poder manipular la información (guardar el objeto XHR)
                                  // new XMLHttpRequest() es un constructor vacio, este generará un objeto sin elementos (vacio) para poder ser rellenado

    //De esta manera ya es posible utilizar la variable x como un objeto para acceder y manipular la API

    x.open('GET', urlAPI, true);

    /*.open abre una solicitud (request), esto recibe tres parámetros, el primero ("GET") hace referencia al tipo de petición, el segudno es la url a utilizar y el tercero es un booleano que pregunta si la función será asincrónica (true) o sincrona (false)
    Respuestas satisfactorias:

    GET: El recurso se ha obtenido y se transmite en el cuerpo del mensaje
    HEAD: Los encabezados de entidad están en el cuerpo del mensaje
    PUT o POST: El recurso que describe el resultado de la acción se transmite en el cuerpo
    TRACE: El cuerpo del mensaje contiene el mensaje de solicitud recibido por el servidor */

    x.onreadystatechange = function (event){ //onreadystatechange ejecutará la función anónima cada que el readystate cambie (readystate retorna el número del estado en el que se encuentra el request)
        if (x.readyState === 4){
            if (x.status === 200){
            // Existen 5 estados (ciclo de vida de un readyState):                                   //Respuestas HTTP:
            /* 0 {UNSENT} = No inicializado                                                          Existen 5 clases de respuestas http:
            1 {OPENED} = open() se ha llamado                                                        100 - 199 = Respuestas informativas
            2 {HEADERS RECEIVED} = Se ha llamado a send(), headers y status disponibles              200 - 299 = Respuestas satisfactorias
            3 {LOADING} = Descargando, responseText tiene información parcial                        300 - 399 = Redirecciones
            4 {DONE} = Operación completa.                                                           400 - 499 = Errores de los clientes
                                                                                                   //500 - 599 = Errores de los servidores*/
            
                callback(null, JSON.parse(x.responseText)); // Nuestra función de callback recibe dos parámetros, el primero, null es utilizado en caso de que se presente un error, en este caso ya hemos verificado que no existen errores debido a 4 && 200 por lo que el parámetro toma el valo null.
            //x.responseText es la respuesta del servidor en formato de texto, JSON.parse pasa dicha información a formato JSON (además de hcaerla manipulable)

            } else {
                const error = new Error ('Error' + urlAPI); //en caso de ocurrir algun error, este queda almacenado aqui
                return callback(error, null); //Regresa el error y el parámetro null toma ese valor.
        }
        }
    }
    x.send(); //Envia la respuesta (procesamiento de datos) al server (API)
}


fetchData(`${API}/products`, function (error1,data1){ //Función que recibe una url de una API y un callback
    if (error1) return console.error(error1); //Si se recibe un error, se detiene el código y se imprime dicho error
    fetchData(`${API}/products/${data1[0].id}`, function (error2,data2){ //Si se obtiene la información pedida (data1), se vueleve a ejecutar la función fetchData (pidiendo el id del producto esta vez)
        if (error2) return console.error(error2); //Si recibe un error, se detiene y lo imprime
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3,data3){ //Si se recibe información (data 2) se ejecuta de nuevo fetchData (esta vez pidiendo la categoria y el id del producto) y así continúa el ciclo de los callbacks... El simbolo ? es un Optional Chainning, su función principalmente es crear flexibilidad cuando se escribe una propiedad, es decir, si la página tiene un elemento "x" y en el código se escribe como "xs" aún asi pueda funcionar
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
}); 
