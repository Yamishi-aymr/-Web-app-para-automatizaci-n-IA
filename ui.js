
import { enviarConsulta } from "./api.js";

// Elementos del formulario
const formulario = document.getElementById("consultaForm");

const campoTema = document.getElementById("tema");
const campoNivel = document.getElementById("nivel");
const campoPregunta = document.getElementById("pregunta");
const campoIntegracion = document.getElementById("integracion");

const botonEnviar = document.getElementById("btnEnviar");

// Elementos de resultados
const estado = document.getElementById("estado");
const contenedorResultado = document.getElementById("resultado");
const textoRespuesta = document.getElementById("respuesta");
const informacionConsulta = document.getElementById("informacionConsulta");
const resultadoVacio = document.getElementById("resultadoVacio");

// Mostrar mensajes de estado
function mostrarEstado(mensaje, tipo) {
    estado.textContent = mensaje;
    estado.className = `estado ${tipo}`;
}

// Mostrar la respuesta recibida
function mostrarResultado(datos) {
    textoRespuesta.textContent = datos.respuesta;

    informacionConsulta.textContent =
        `Tema: ${datos.tema} | Nivel: ${datos.nivel} | Integración: ${datos.integracion}`;

    resultadoVacio.hidden = true;
    contenedorResultado.hidden = false;
}

// Controlar el envío del formulario
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Capturar y limpiar los datos
    const datos = {
        tema: campoTema.value.trim(),
        nivel: campoNivel.value.trim(),
        pregunta: campoPregunta.value.trim(),
        integracion: campoIntegracion.value.trim()
    };

    // Validar campos obligatorios
    if (
        !datos.tema ||
        !datos.nivel ||
        !datos.pregunta ||
        !datos.integracion
    ) {
        mostrarEstado(
            "Por favor, completa todos los campos.",
            "error"
        );
        return;
    }

    // Validar longitud de pregunta
    if (datos.pregunta.length > 1000) {
        mostrarEstado(
            "La pregunta no puede superar los 1000 caracteres.",
            "error"
        );
        return;
    }

    // Estado de carga
    botonEnviar.disabled = true;
    botonEnviar.textContent = "Procesando consulta...";

    contenedorResultado.hidden = true;
    resultadoVacio.hidden = false;

    mostrarEstado(
        "Conectando con n8n y consultando a la IA...",
        "cargando"
    );

    try {
        // Enviar consulta al Webhook
        const resultado = await enviarConsulta(datos);

        // Mostrar respuesta
        mostrarResultado(resultado);

        mostrarEstado(
            "¡Consulta procesada correctamente!",
            "exito"
        );

    } catch (error) {
        console.error("Error:", error);

        mostrarEstado(
            error.message || "Ocurrió un error al procesar la consulta.",
            "error"
        );

        resultadoVacio.hidden = false;

    } finally {
        // Restaurar botón
        botonEnviar.disabled = false;
        botonEnviar.textContent = "Enviar consulta a la IA";
    }
});
