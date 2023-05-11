let name = 'Pedro';

let phpoints : number | string ; //Puedo declarar dos tipos de datos para una variable 
//Si quiero tipar un objeto debo crear una interface
interface Character{
    name: string;
    hp: number;
    skills?:string[]; //(el ? puede venir o no el atributo)
}

const personaje: Character={
    name: 'Legolas',
    hp: 200,
    skills: ['poder','fuerza'],
}
//Functions
function addNumbers(a:number, b:number){
    return a+b;
}
const result: number = addNumbers(1,2);
console.log(result)
//Funcion flecha
const arrowFunc = (a:number, b:number): string =>{
    return `a+b`//es lo mismo  que -->   return (a+b).toString();
}





export{};