const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());
require('dotenv').config();

const port = 3000

app.post('/', async (req, res) => {
    const prompt = req.body.prompt;
    try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': process.env.GOOGLE_API_KEY
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
            res.send(data?.candidates[0]?.content?.parts[0]?.text);;
        } catch (error) {
            console.error('Error:', error);
        }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
