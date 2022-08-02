
// }}
// ARRAY CON NOMBRES DE 5 MASCOTAS
// let entradaNombre = prompt('nombre de la mascota')
// let cantidad = 5;
// const listaMascotas = [];

// function agregarMascota() {
  
//     mascota = prompt('nombre de mascota para agregar a la lista')
//     listaMascotas.push(mascota)
//     console.log(listaMascotas)
// }

// while(listaMascotas.length != cantidad){
//     agregarMascota();
// }
// {  
//     console.log("la lista de " + cantidad + " mascotas es: " + listaMascotas)
// }
let nuevoIngreso;
let buscar;

class mascota{
    constructor(nombre,raza, edad, peso){
    this.nombre = nombre;
    this.raza = raza;
    this.edad = parseInt(edad);
    this.peso = parseInt(peso);
    }}

const mascotas = []
mascotas.push(new mascota("Bobi", "bulldog", 3, 11));
mascotas.push(new mascota("Firulai", "golden", 2, 9));
mascotas.push(new mascota("colita", "labrador", 6, 13));
mascotas.push(new mascota("toto", "poodle", 4, 6));
mascotas.push(new mascota("braulio", "pastor", 7, 16));

function mascotaNueva(){
    this.nombre=prompt("nombre de la mascota");
    this.raza=prompt("ingrese raza");
    this.peso=parseInt(prompt("ingrese el peso"))
    this.edad=parseInt(prompt("ingrese edad"))
    mascotas.push(new mascota(this.nombre,this.raza,this.peso,this.edad))
    console.log(mascotas);
}
function mostrarLista(){
    alert(mascotas)
}


nuevoIngreso=prompt("desea agregar una nueva mascota?")
if (nuevoIngreso=="si"){
    mascotaNueva();
    console.log(this.nombre + "ha sido agregado a la lista");
    console.log(mascotas);
}else{
console.log("ninguna mascota ingeresada")
}

buscar=prompt("desea buscar un nombre en la lista? escriba el nombre")

console.log(mascotas.includes(buscar))
   
      if(true) {
          alert(buscar + " está en la lista.")
   }
   else{
       console.log(buscar + "no está en la lista")
   }
console.log("gracias");
