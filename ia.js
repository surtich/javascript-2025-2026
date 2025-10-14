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