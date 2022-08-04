// let nuevoIngreso;
// let buscar;

class mascota {
    constructor(nombre, raza, edad, peso) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.peso = parseInt(peso);
    }
}
// LISTA ORIGINAL DE MASCOTAS
const mascotas = []
mascotas.push(new mascota("bobi", "bulldog", 3, 11));
mascotas.push(new mascota("firulai", "golden", 2, 9));
mascotas.push(new mascota("colita", "labrador", 6, 13));
mascotas.push(new mascota("toto", "poodle", 4, 6));
mascotas.push(new mascota("braulio", "pastor", 7, 16));
// FUNCION PARA INGRESAR UNA MASCOTA NUEVA AL ARRAY MASCOTAS
function mascotaNueva() {
    this.nombre = prompt("nombre de la mascota");
    this.raza = prompt("ingrese raza");
    this.peso = parseInt(prompt("ingrese el peso"))
    this.edad = parseInt(prompt("ingrese edad"))
    mascotas.push(new mascota(this.nombre, this.raza, this.peso, this.edad))
    console.log(mascotas);
}

// FUNCIONA. TIENE UNA CONFIRMACION AL PRINCIPIO PARA ASEGURAR QUE SE QUIERE AGREGAR UNA NUEVA MASCOTA
function agregarMascota() {
    nuevoIngreso = prompt("desea agregar una nueva mascota? escriba 'si' para sumarla")
    if (nuevoIngreso == "si") {
        mascotaNueva();
        console.log(this.nombre + "ha sido agregado a la lista");
        console.log(mascotas);
    } else {
        alert("ninguna mascota ingeresada");
    }
}

//  FUNCIONA
function mostrarLista() {
    for (const mascota of mascotas) {
        console.log(mascota.nombre);
        
    }cantidadMascotas();
}

// FUNCIONA
function cantidadMascotas() {
    console.log("hay "+ mascotas.length + " mascotas en la lista")
}

// FUNCIONA  
function buscarMascota()
{
    let buscar=prompt("escriba el nombre de la mascota a buscar");
    const resultado = mascotas.find((el)=> el.nombre==buscar);
    console.log(resultado);
}

// FUNCIONA
function buscarRaza()
{
    let buscarPorRaza=prompt("ingrese la raza");
    const resultado2 = mascotas.filter((el)=> el.raza==buscarPorRaza);
    console.log(resultado2);
}
