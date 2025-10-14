const promptInput = document.getElementById("promptInput");
const sendPromptButton = document.getElementById("sendPrompt");
const responseParagraph = document.getElementById("response");


async function sendPrompt(prompt) {
    try {
        
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt
        })
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

sendPromptButton.addEventListener("click", async function() {
    const userInput = promptInput.value;
    const response = await sendPrompt(userInput);
    responseParagraph.textContent = "Respuesta del chatbot: " + response;
});


/*
1.- Mejorar la gestión de errores del LLM. (0,5 puntos)
2.- Añadir un spinner o indicador de carga mientras se espera la respuesta del LLM. (0,25 sólo una persona)
3.- La respuesta del servidor puede estar en varios formatos y contener caracteres especiales, manejar esos casos. (0,5 puntos)
4.- Implementar un historial de conversaciones para que el usuario pueda ver las interacciones anteriores. (0,25 puntos)
5.- Implementar autenticación y autorización para proteger el acceso a la API del LLM (JWT). (1 punto)
6.- Mejorar la interfaz de usuario con estilos CSS y diseño responsivo. (0,5 puntos)
7.- Implementar pruebas unitarias y de integración para asegurar la calidad del código. (0,5 puntos)    
*/