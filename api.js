
const WEBHOOK_URL = "https://instancia12.app.n8n.cloud/webhook/webapp-automatizacion-ia";

export async function enviarConsulta(datos) {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tema: datos.tema,
                nivel: datos.nivel,
                pregunta: datos.pregunta,
                integracion: datos.integracion
            })
        });

        let resultado;

        try {
            resultado = await response.json();
        } catch {
            throw new Error("n8n devolvió una respuesta que no es JSON.");
        }

        if (!response.ok || resultado.ok !== true) {
            throw new Error(
                resultado.mensaje || "No fue posible procesar la consulta."
            );
        }

        return resultado;

    } catch (error) {
        console.error("Error de comunicación con n8n:", error);

        throw error;
    }
}
