function* gen() { //Nos permite controlar un iterador el cual, puede pausar/reanudar la ejecución de una tarea
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); //Accede al siguiente elemento, a la propiedad value (para que no muestre todo el objeto)
console.log(g.next().value);
console.log(g.next().value);

function* i(arr){
    for (let val of arr){ //Recorre todos los elementos de un arreglo
        yield val //Devuelve un elemento del arreglo y se detiene
    }
}

const a = i(['a','b','c','d']);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
