// const tarjeta = document.querySelector("article");

// const persona = {
//   nombreCompleto: {
//     nombre: "Macarena",
//     apellido: "Reale"
//   }, 
//   edad: 26, 
//   profesiones: ["diseñadora", "emprendedora", "actriz", "programadora"],
//   sabeProgramar: true,
//   ofreceEnvioGratuito: true,
// }



// tarjeta.innerHTML = `
// <div>
//   <h1>${persona.nombreCompleto.nombre}</h1>
//   <h2>${persona.edad}</h2>
//   <div>${persona.edad > 18 ? "es mayor de edad" : "no es mayor de edad"}</div>
//   <h3>${persona.profesiones.join(", ")}</h3>
// </div>
// `



// // map 

// // metodos
// // los metodos son funciones, funciones nativas al lenguaje 
// // pueden recibir parametros, y pueden retornar algo

// Map es un metodo que recibe como parametro una funcion
// Esa funcion recibe como parametro a cada uno de los elementos del array
// Y crea un nuevo array, con lo que retorna la funcion

const edades = [4, 87, 35, 99, 65, 12]

// const funcionParaMap = (el, i, arr) => {
//   console.log(el, i, arr)
//   return elemento * 10
// }

// const nuevoArray = edades.map(funcionParaMap)

const nuevoArray = edades.map((elemento) => {
  if (elemento > 18) {
   return elemento 
  }
  else {
    return "elemento menor a 18"
  }
})

console.log(edades)
console.log(nuevoArray)

