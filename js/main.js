const golpe = 1976;
const anio = new Date().getFullYear() - golpe;

console.log("hola");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("anios").textContent = anio;
})

const buscador = document.getElementById("buscador");
const testimonios = document.querySelectorAll(".testimonio");

console.log(buscador);
console.log(testimonios);
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    
    testimonios.forEach((testimonio) => {
        const contenido = testimonio.textContent.toLowerCase().trim();
        testimonio.classList.toggle("d-none", !contenido.includes(texto));
    });
});

const formTarjeta = document.getElementById("form-tarjeta");
const seccionTarjeta = document.getElementById("tarjeta-conmemorativa");
const tarjeta = document.getElementById("tarjeta");
const nombreTarjeta = document.getElementById("tarjeta-nombre");
const mensasjeTarjeta = document.getElementById("tarjeta-mensaje");
const alerta = document.getElementById("alerta-tarjeta");
const anios = document.getElementById("tarjeta-anios");

formTarjeta.addEventListener("submit", (boton) => {
    boton.preventDefault();

    const nombre = document.getElementById("nombre-tarjeta").value.trim();
    const mensaje = document.getElementById("mensaje-tarjeta").value.trim();

    if(nombre === "" || mensaje === ""){
        alerta.classList.toggle("d-none", false)
        return;
    }
    anios.textContent = anio;
    nombreTarjeta.textContent = nombre;
    mensasjeTarjeta.textContent = mensaje;
    tarjeta.classList.toggle("d-none", false);
    alerta.classList.add("d-none")
});

const alertaAdhesion = document.getElementById("alerta-adhesion");
const alertaDiv = document.getElementById("alerta");
const formAdhesion = document.getElementById("form-adhesion");
const icon = document.getElementById("icon-alerta");

function mostrarAlerta(texto, exito = false){
    alertaAdhesion.textContent = texto;
    alertaDiv.classList.remove("d-none");
    icon.classList.toggle("bi-check-circle", exito);
    icon.classList.toggle("bi-info-circle", !exito);
}

formAdhesion.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre-adhesion").value.trim();
    const apellido = document.getElementById("apellido-adhesion").value.trim();
    const correo = document.getElementById("email-adhesion").value.trim();

    if (nombre.length < 3 || apellido.length < 3) {
        mostrarAlerta("El nombre o el apellido ingresados son muy cortos.")
    }else if(!correo.includes("@")){
        mostrarAlerta("EL correo ingresado es invalido.")
    }else{
        formAdhesion.reset();
        icon.classList.remove("bi-info-circle");
        icon.classList.add("bi-check-circle");
        mostrarAlerta(`¡Gracias ${nombre} por sumarte!`, true);
    }
});