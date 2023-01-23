function sum (a,b){ //Función de suma y retorno de resultado
    return a + b;
}

function calc(a, b, callback){ // Se crea una segunda función la cual recibe tres parámetros de los cuales uno de ellos llamado callback
    //El parámetro callback será una variable que adopte el nombre dado por el usuario, si dicho nombre coincide con el de una función entonces callback hará las mismas tareas que dicha función
    return callback(a, b);
};

//////////////////////////

setTimeout(function () {
    console.log('HELLo...');
},2000);

//////////////////////////

const g = (name) => {
    console.log(`Hola ${name}`);
}

setTimeout(g,2000, 'Andrei'); //SetTimeOut es un callback en si mismo, en este caso esta recibiendo una función, el timepo y el(los) argumento de la función a imitar como parámetros.