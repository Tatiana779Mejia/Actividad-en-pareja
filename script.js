// Crear la lista de consejos
 
const consejos = [
    "Practica todos los dias algo de programacion para no perder el ritmo.",
 
    "Utiliza recursos como videos y tutoriales para complementar tu aprendizaje.",
 
    "Practica con ejercicios y proyectos reales en casa para poner en practica lo aprendido.",
 
    "Haz preguntas si no entiendes algo, los teachers y nosotros sus hermanos mayores estamos para ayudarte.",
 
    "No te desanimes con los errores, son parte del proceso de aprendizaje.",
 
    "Tomate descansos cortos entre sesiones de estudio para evitar el agotamiento.",
 
    "Busca herramientas que te faciliten el aprendizaje y puedas ser mas efectivo en clases y en proyectos futuros."
   
 
];
 
// Obtener el contenedor donde se insertará la lista
const listaContenedor = document.getElementById("consejos-lista");
const ul = document.createElement("ul");
 
consejos.forEach((consejo) => {
 
    const li = document.createElement("li");
 
    li.innerHTML = consejo;
 
    ul.appendChild(li);
});
listaContenedor.appendChild(ul);






