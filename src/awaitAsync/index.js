const fnAsync = () => {
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=> resolve('AsyncFTW!!!'),2000) //Valor true para forzar que se cunpla la condición
        : reject(new Error('Error!'));
    });
}

const f = async () => { //Async y Await no bloquean el código, se sigue ejecutando mientras await se resuelve
    const a = await fnAsync(); //Se detiene la ejecución de esta función aqui, ya que, espera a que la función/promesa fnAsync se resuelva
    console.log(a);
    console.log('HELLo'); //Se ejecuta cuando la variable 'a' regresa, ya sea con un resolve o reject
}

console.log('Before'); //Se ejecuta
f(); //Se llama a la función (que tarda 2 segundos en resolver)
console.log('After'); //Se ejecuta a pesar de que la función/promesa aun no se resuelven