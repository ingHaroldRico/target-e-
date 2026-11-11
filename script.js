
//crear un array con 4 menús (4 objetos con nombre, precio, imagen, boton de comprar)
//imprimir desde .js cada uno de los productos en un div. tienen que usar un ciclo  que recorra el array 
//y o agregue en un contenedor. usar estilos. todo con el appenChild. agregr el corazon de me encanta y que cambie
// en el html solo el dvi y el css

menu=[
    {nombre:"Hamburguesa", precio: 15000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIFBOhpomdD-LhktJkFsrMWtyd8vTNT_wArjA_4osxg&s=10"},
    {nombre:"Perro Sencillo", precio: 8000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWhPpbLjec8VJe9gYlIUdeWveWl5plr0ymG_XRHi5gw&s=10"},
    {nombre:"Perro suizo", precio: 12000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaubpumDCw6RM7imkqE8ST6iXmXbQH5s5_dO51wvGwg&s=10"},
    {nombre:"Desgranado", precio: 20000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcCFq9uweU6AGTX605R9A64c-q9Z1Ow4e9Vg6qAb8cVqwPdd6roo49C9Fl-PMBPlWly7bR0ShEVLUj4YoBzBmzjsI_veTHkupYoyKoDu0&s=10"},
    {nombre:"Salchipapa", precio: 25000, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbv8tWweshGTebkaIsbH5quOGtATtoPKGuUJ2q72s67A&s=10"}
]

menu.forEach(element =>  {
    // console.table(element);
    const plato=document.createElement("div");
    plato.classList.add("div-hijo");
    const nombre=document.createElement("h4");
    nombre.textContent=element.nombre;
    const precio=document.createElement("h4");
    precio.textContent="Precio: $ " + element.precio;
    const imagenaux=document.createElement("img");
    imagenaux.src=element.imagen;
    
    const div=document.createElement("div");
    div.classList.add("botones");

    const boton=document.createElement("button")
    boton.textContent="Eliminar";
    boton.classList.add("btn_hijo")

    const boton2=document.createElement("button");
    boton2.textContent="Comprar";
    boton2.classList.add("btn_hijo2")
    
    plato.appendChild(nombre);
    plato.appendChild(precio);
    // plato.appendChild(imagen);
    plato.appendChild(imagenaux);

    div.appendChild(boton2);
    div.appendChild(boton);
    

    plato.appendChild(div);
    
  
    document.querySelector(".contenedor").appendChild(plato);
   


});

// document.querySelector(".contenedor").lastElementChild.remove();
const padre=document.querySelector(".contenedor");
padre.addEventListener('click', (e)=>{
    if(e.target.classList.contains("btn_hijo")){
        const btn_precionado=e.target.parentElement;
        const eliminar=btn_precionado.parentElement;
        eliminar.remove();
        console.log("Plato Eliminado");
    }
})
const padrediv=document.querySelector(".contenedor")
padrediv.addEventListener('click', (e)=>{
    if(e.target.classList.contains("btn_hijo2")){
        const btn_precionado=e.target.parentElement;
        const comprar=btn_precionado.parentElement;
        const hijo=document.createElement("h4");
        hijo.textContent="--Vendido--";
        hijo.classList.add("vendido")
        comprar.appendChild(hijo);
        console.log("Plato Comprado");
    }
})

const formulario=document.querySelector("#form");
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input=document.querySelector("input");
    const pedido=input.value.toLocaleLowerCase();
    const item=document.createElement("li");
    item.textContent=pedido;
    const lista=document.querySelector(".listado");
    lista.appendChild(item);
  
});

