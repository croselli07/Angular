// Al agregar 'export' en cuaquier interfaces, funcion , hace que cualquiera lo pueda importar
//Seteo lo que necesito con export
import { Product, textCalculator1, TaxtCalculation } from './01-basic-typescript';

const shoppingCard : Product[]=[
    {
        desc:'Iphone',
        price:1000
    },
    {
        desc: 'Nokia',
        price:800
    }

];
const lista : TaxtCalculation ={
    tax:0.2,
    products: shoppingCard
}
const [total,taxis] = textCalculator1({tax: lista.tax,products:lista.products})

console.log('Total',total);
console.log('Tax', taxis)


