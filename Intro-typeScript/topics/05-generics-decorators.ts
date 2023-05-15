//Tratar de no usar any porque no es lo mas correcto
//<T> es un tipo generico
export function whatMyType<T> (argument: T):T {

    return argument;
    
}

let amIaString = whatMyType<string>('Hello World'); // aca con <> le especifico el tipo de dato que voya mandar , por poner generico en la func
let amIaNumber = whatMyType<number>(100);
let amIaBoolean = whatMyType<boolean>(true);
let amIAnArray = whatMyType<number[]>([1,2,3,4,5,6,7,8,9,10]);


console.log(amIaString.split(' '));
console.log(amIaNumber.toFixed(2));
console.log(amIaBoolean.valueOf());
console.log(amIAnArray.reverse());
//Decorators
//Le agrego funcionalidad a una clase, funcion, propiedad, etc.

function classDecorator(){
    constructor: any

}
@classDecorator
class SuperClass{
    public myProperty:string = 'ABC123'; 
    print(){
        console.log('Hello World');
    }
}
console.log(SuperClass);

const newClass = new SuperClass();
console.log(newClass);
