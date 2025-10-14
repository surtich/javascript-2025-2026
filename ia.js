const promptInput = document.getElementById("promptInput");
const apiKeyInput = document.getElementById("apikeyInput");
const sendPromptButton = document.getElementById("sendPrompt");
const responseParagraph = document.getElementById("response");


async function sendPrompt(prompt) {
    try {
        const apiKey = apiKeyInput.value; // Obtén la API key del input

        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
            contents: [
            {
                parts: [
                {
                    text: prompt
                }
                ]
            }
            ]
        })
        });

        const data = await response.json();
        console.log(data);
        return data?.candidates[0]?.content?.parts[0]?.text;
    } catch (error) {
        console.error('Error:', error);
    }
}

sendPromptButton.addEventListener("click", async function() {
    const userInput = promptInput.value;
    const response = await sendPrompt(userInput);
    responseParagraph.textContent = "Respuesta del chatbot: " + response;
});