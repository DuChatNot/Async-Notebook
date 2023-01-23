//Estructura de una promesa:

//Una promesa tiene 3 estados:
//Pendiente: Se esta ejecutando
//Resuelta: Ha regresado la información deseada
//Rechazada: No se regresa la información deseada

const p = new Promise(function (resolve,reject){  //Sintaxis básica de una promesa
    resolve('Correcto')
});

const cows = 2;

const countCows = new Promise(function (resolve,reject){
    if (cows > 10){
        resolve(`I own ${cows} cows, that's enough bitch!`);
    } else {
        reject('There are not enough cows here, fuck!');
    }
});

countCows.then(function (r){ //El resultado resuelto de la promesa se guarda en el parámetro de la función ("r" en este caso)
    console.log(r);
})
.catch(function (e){ //El resultado rechazado de la promesa se guarda en el parámetro "e"
    console.log(e);
})
.finally(function (){ //Cuando termine la promesa, se ejecuta este bloque de código
    console.log('Promise Finished!');
});