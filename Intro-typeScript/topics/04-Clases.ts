//video 22
export class Person{
    public name:string | undefined; //o  public name?:string
    private adress:string; // ojo q si bien es privada, el compilador lo muestra igual en consola del html

    constructor(name:string, adress:string){ //puedo agregar el public o private en el constructor
        this.name = name;
        this.adress = adress;
    }
}

const person = new Person('Pepe','Berazategui');
console.log(person);

export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,){
            super(realName, 'New york');//llamo al constructor de la clase padre
        }   
}
//Otra forma de harcerlo sin usar el extends y mas correcta seria asi:
export class Hero2{ 
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person){
        }
}
const person2 = new Hero('Spiderman', 30, 'Peter');
console.log(person2);

const bat = new Person('Batman', 'Gotham');
const person3 = new Hero2('Batman', 30, 'Bruce', bat);
console.log(person3);
