// Tipos de datos en js
/* 
number
string
boolean
null
undefined
object
function
*/

// Tipos de datos en ts
/* 
any
unknown
never
arrays
tuplas
Enums
*/

let exDin: number = 76_000_000;
let favDin: string = "Rex";
let extint: boolean = true;

let klk: number;

function getNumber(): number {
  return 1;
}

function ret(config: string) {
  return console.log(config);
}

ret("19");

let animales: string[] = ["perro", "gato", "pez"];
let animales2: Array<string> = ["perro", "gato", "pez"];
// array de objetos
let animales3: Array<{ nombre: string; edad: number }> = [
  { nombre: "perro", edad: 1 },
  { nombre: "gato", edad: 2 },
  { nombre: "pez", edad: 3 },
];

// tupla
let tupla: [string, number] = ["perro", 1];
// ! tupla.push(1);
// enum
enum Animales {
  perro = "perro",
  gato = "gato",
  pez = "pez",
}

// any
let klk2: any = "hola";
klk2 = 1;
klk2 = true;

animales3.map((x) => {
  console.log(`nombre: ${x.nombre}, edad: ${x.edad}`);
});

type Address = {
  street: string;
  city: string;
};

type Responses = {
  readonly id: number;
  name: string;
  email: string;
  address: Address;
};

const dataApi: Responses = {
  id: 1,
  name: "John",
  email: "",
  address: {
    street: "",
    city: "",
  },
};

const myArr: Responses[] = [
  dataApi,
  {
    id: 1,
    name: "Daniel",
    email: "daniel@email.com",
    address: {
      street: "nose",
      city: "tampoco",
    },
  },
  {
    id: 2,
    name: "John",
    email: "jhon@email.com",
    address: {
      street: "alli",
      city: "aqui",
    },
  },
];

myArr.map((x) => {
  console.log(x.address.city);
});
