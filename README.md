
# Instituto Tecnológico de Pachuca

## Ingeniería en tecnologías de la Información y Comunicaciones

### Inteligencia Artificial Aplicada a las TIC

Profesor: **Víctor Manuel Pinedo Fernández**

Autor: **Alicia Yamileth Mariano Reséndiz**

Fecha: **11/11/2026**

## Práctica 3.4 – Web App para Automatización con IA

### Descripción del proyecto

Desarrollo de una aplicación web que permite realizar consultas académicas mediante inteligencia artificial, utilizando una interfaz externa conectada a n8n Cloud a través de un Webhook.

La aplicación permite seleccionar un tema, un nivel académico, escribir una pregunta y elegir entre dos métodos de integración con OpenAI: el nodo nativo de n8n y HTTP Request mediante Responses API.

### Objetivo

Desarrollar y publicar una aplicación web que integre tecnologías frontend con herramientas de automatización e inteligencia artificial, permitiendo enviar información a n8n Cloud y recibir respuestas mediante JSON.

### Tecnologías utilizadas

- HTML5: estructura de la aplicación.
- CSS3: diseño visual Neo AI futurista oscuro.
- Bootstrap 5: diseño responsivo.
- JavaScript ES Modules: lógica e interacción.
- Fetch API: comunicación con el Webhook.
- n8n Cloud: automatización del flujo.
- OpenAI: generación de respuestas académicas.
- GitHub: control y alojamiento del código.
- GitHub Pages: publicación de la aplicación.

### Funcionalidades

- Selección de cinco temas académicos.
- Selección de tres niveles de conocimiento: Básico, Intermedio y Avanzado.
- Captura de preguntas con límite de 1,000 caracteres.
- Selección entre integración OpenAI nativa y HTTP Request.
- Envío de información mediante solicitudes POST.
- Recepción de respuestas JSON.
- Validación de datos de entrada.
- Manejo de errores y estados de procesamiento.
- Visualización de respuestas generadas por inteligencia artificial.

### Arquitectura de funcionamiento

1. El usuario ingresa los datos en la aplicación web.
2. JavaScript captura y valida los campos.
3. Fetch API envía una solicitud POST al Webhook de n8n.
4. n8n valida y normaliza la información.
5. El nodo Switch selecciona la integración solicitada.
6. La consulta se procesa mediante OpenAI nativo o HTTP Request.
7. Ambas rutas normalizan su respuesta a una estructura JSON común.
8. Respond to Webhook devuelve el resultado a la aplicación.
9. JavaScript muestra la respuesta al usuario.
