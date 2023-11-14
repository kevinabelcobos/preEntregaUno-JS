const SI = 'si';
const NO = 'no';


let nombre;
let nombreItem;
let precio;
let cantidad;
let total=0;
let fila;
let continuar;
let ticket= 'nombre precio cantidad subtotal /n';

nombre= prompt('Bienvenido al carrito de compras!/n Ingrese su nombre: ');
do{
nombreItem = prompt (`Nuevo item para ${nombre}/n Ingrese su nombre: `);
precio= +prompt('precio: ');
cantidad = +prompt('cantidad: ');

fila= `${nombreItem}   ${precio}   ${cantidad}  $${cantidad*precio} /n`;
ticket= ticket + fila;
total= total +precio * cantidad;

continuar = prompt('desea volver a cagar otro item? si/no').toLowerCase();
}while (continuar ===SI);

ticket = ticket + `TOTAL: $${total}`;
alert(ticket);
alert(`Gracias por venir ${nombre}!`);
