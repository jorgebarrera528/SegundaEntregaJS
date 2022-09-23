//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}


let producto1 = new Producto(1, "Cargador de Celular");
let producto2 = new Producto(2, "Audifono");
let producto3 = new Producto(3, "Smartwatch");
let producto4 = new Producto(4, "Mouse");
let producto5 = new Producto(5, "Teclado");

const carrito = [];

let contenido = document.getElementById("content");
let cantidad = document.getElementById("cantidad");


let boton1 = document.getElementById("btn1"); 
boton1.addEventListener("click", () => {
    carrito.push(producto1.descripcion);
    contenido.innerHTML = JSON.stringify(carrito);
    cantidad.innerHTML = carrito.length; 
    
    });
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    carrito.push(producto2.descripcion);
    contenido.innerHTML = JSON.stringify(carrito);
    cantidad.innerHTML = carrito.length; 
   
});
let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    carrito.push(producto3.descripcion);
    contenido.innerHTML = JSON.stringify(carrito);
    cantidad.innerHTML = carrito.length; 
    
}); 
let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
    carrito.push(producto4.descripcion);
    contenido.innerHTML = JSON.stringify(carrito);
    cantidad.innerHTML = carrito.length; 
   
   
}); 
let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", () => {
    carrito.push(producto5.descripcion);
    contenido.innerHTML = JSON.stringify(carrito);
    cantidad.innerHTML = carrito.length; 
}); 











