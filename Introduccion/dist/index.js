"use strict";
let exDin = 76000000;
let favDin = "Rex";
let extint = true;
let klk;
function getNumber() {
    return 1;
}
function ret(config) {
    return console.log(config);
}
ret("19");
let animales = ["perro", "gato", "pez"];
let animales2 = ["perro", "gato", "pez"];
let animales3 = [
    { nombre: "perro", edad: 1 },
    { nombre: "gato", edad: 2 },
    { nombre: "pez", edad: 3 },
];
let tupla = ["perro", 1];
var Animales;
(function (Animales) {
    Animales["perro"] = "perro";
    Animales["gato"] = "gato";
    Animales["pez"] = "pez";
})(Animales || (Animales = {}));
let klk2 = "hola";
klk2 = 1;
klk2 = true;
animales3.map((x) => {
    console.log(`nombre: ${x.nombre}, edad: ${x.edad}`);
});
const dataApi = {
    id: 1,
    name: "John",
    email: "",
    address: {
        street: "",
        city: "",
    },
};
const myArr = [
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
//# sourceMappingURL=index.js.map