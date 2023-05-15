let name = 'Pedro';

let phpoints : number | string ; //Puedo declarar dos tipos de datos para una variable 
//Si quiero tipar un objeto debo crear una interface
interface Personaje{
    name: string;
    hp: number;
    skills?:string[]; //(el ? puede venir o no el atributo)
}

const personaje: Personaje={
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
const arrowFunc = (a:number, b?:number): string =>{  //el ? es que puede o no venir
    return `a+b`//es lo mismo  que -->   return (a+b).toString();
}
//funciones con objetos

interface Character{
    name: string;
    hp:number;
    showHp: () => void;
}

const healCaract = (character: Character, amount: number) =>{
    character.hp += amount;
}

const strider: Character = {
    name:'Legolas',
    hp:50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

//#######Desestructuracion######
interface Audio{
    audioVol:number;
    songDur: number;
    song: string ;
    details: Details
}
interface Details{
    author:string;
    year: number;

}
const audioPlayer : Audio ={
    audioVol: 90,
    songDur: 50,
    song: "Hello",
    details: {
        author: 'john',
        year: 2016
    }
}
console.log('Song', audioPlayer.song) // forma vieja 
console.log('Song', audioPlayer.details.author + 'Year ', audioPlayer.details.year) // forma vieja 
//Forma desestructurada , creando una nueva var , 
//y hasta puedo renombrar con el name q quiero
const {song:renombre, songDur:reombre2} = audioPlayer;
console.log('Song', renombre +'Song duration  ',reombre2)

const {author , year} = audioPlayer.details
console.log('Song', author + 'Year ', year) 

//Arreglos
const nombres: string[] = ['JUan','jose', 'Pepe']
//desestruturado
const [,,pepe]: string[] = ['JUan','jose', 'Pepe']
export interface Product{
    desc: string;
    price: number;
}
const phone: Product ={
    desc: 'Nokia',
    price: 100,
}
const tablet: Product ={
    desc: 'Apple',
    price: 200,
}
export interface TaxtCalculation{
    tax: number,
    products: Product[],
}
function textCalculator(option: TaxtCalculation): number[]{
    let total = 0;

    option.products.forEach(element => {
        total += element.price;
    });
    return [total, total*option.tax];
}
//DEsestructurado
export function textCalculator1({tax , products}: TaxtCalculation): number[]{ // aca saco option y lo paso desesctructur
    let total = 0;

    products.forEach(element => {
        total += element.price;
    });
    return [total, total*tax];
}

const shoppingCard = [phone , tablet]
const tax = 0.15
//A la funcion le paso los 2 parámetros para q calcule
const result1 = textCalculator({
    products: shoppingCard,
    tax: tax,
})
//Desestructurado
const [total, totalTax] = textCalculator1({
    products: shoppingCard,
    tax: tax,
})
console.log('Total ', result1[0]);
console.log('Tax ', result1[1])

//Operador ??   
// ? Si el valor es null o undefined , le asigna el valor q le paso
// ! obligo ya que aseguro que va a llegar lo que digo 
//EJ:
const user = {
    name: 'Juan',
}
 const u = user?.name ||'No existe usuario' // Con el || lo que hago es q si no se cumple la condicion le asigno un valor que le paso
 const u2 = user!.name ||'No existe usuario' // Aca le digo que si o si va a llegar el valor