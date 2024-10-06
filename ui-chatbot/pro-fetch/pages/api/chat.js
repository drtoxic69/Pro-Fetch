// pages/api/chat.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { question, context } = req.body;
  
        // Send request to the Python FastAPI server
        const response = await fetch('http://127.0.0.1:8000/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question, context }),
        });
  
        const data = await response.json();
  
        // Send the chatbot response back to the client
        res.status(200).json({ response: data.response });
      } catch (error) {
        res.status(500).json({ error: 'Error connecting to chatbot' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  