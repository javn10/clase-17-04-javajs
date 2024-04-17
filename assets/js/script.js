console.log("keloke");



let nombreV ="";
let apellidoV ="";


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");


let btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click",(e)=> {
   e.preventDefault();

   nombreV = nombre.value;
   apellidoV = apellido.value;
   edadV = edad.value;

   
   if(nombreV === ""){
    alert ("ponte vio aweonao")
    return;
   }
   if(apellidoV === ""){
    return;
   }

    console.log(`nombre: ${nombreV} y el apellido es: ${apellidoV} y la edad es: ${edadV}`);
})