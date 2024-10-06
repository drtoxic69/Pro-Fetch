import { useState } from 'react';

// Interface for conversation messages
interface Message {
  sender: string;
  message: string;
}

export default function Chatbot() {
  const [userInput, setUserInput] = useState<string>('');
  const [conversation, setConversation] = useState<Message[]>([]);
  const [context, setContext] = useState<string>('');

  const sendMessage = async () => {
    if (!userInput) return;

    setConversation((prev) => [...prev, { sender: 'User', message: userInput }]);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: userInput, context }),
    });

    const data = await response.json();
    setConversation((prev) => [...prev, { sender: 'Bot', message: data.response }]);
    setContext((prev) => `${prev}\nUser: ${userInput}\nAI: ${data.response}`);
    setUserInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={darkStyles.container}>
      <div style={darkStyles.chatBox}>
        <header style={darkStyles.header}>
          <h1 style={darkStyles.title}>Pro-Fetch Chatbot</h1>
        </header>

        <div style={darkStyles.chatWindow}>
          {conversation.length === 0 ? (
            <p style={darkStyles.welcomeMessage}>Start a conversation...</p>
          ) : (
            conversation.map((chat, index) => (
              <div
                key={index}
                style={
                  chat.sender === 'User' ? darkStyles.userMessage : darkStyles.botMessage
                }
              >
                <div style={darkStyles.sender}>{chat.sender}</div>
                <div style={darkStyles.message}>{chat.message}</div>
              </div>
            ))
          )}
        </div>

        <div style={darkStyles.inputSection}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={darkStyles.inputBox}
          />
          <button onClick={sendMessage} style={darkStyles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// Styles for a professional, modern dark theme UI
const darkStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1e1e1e',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  chatBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '600px',
    height: '80vh',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#2c2c2c',
    overflow: 'hidden',
  },
  header: {
    padding: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
    borderBottom: '1px solid #444',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  chatWindow: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: '#333',
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: '50px',
    fontSize: '1.2rem',
  },
  userMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '15px',
  },
  botMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: '5px',
    fontSize: '0.9rem',
    color: '#ddd',
  },
  message: {
    padding: '12px 20px',
    borderRadius: '20px',
    maxWidth: '80%',
    fontSize: '1rem',
    lineHeight: '1.4',
    backgroundColor: '#444',
    color: '#eee',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
  },
  inputSection: {
    display: 'flex',
    padding: '15px',
    borderTop: '1px solid #444',
    backgroundColor: '#2c2c2c',
  },
  inputBox: {
    flex: 1,
    padding: '12px',
    borderRadius: '20px',
    border: '1px solid #555',
    fontSize: '1rem',
    marginRight: '10px',
    backgroundColor: '#444',
    color: '#ddd',
    outline: 'none',
    transition: 'border 0.2s ease',
  },
  inputBoxFocus: {
    border: '1px solid #007bff',
  },
  sendButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
};

// Button hover effect for dark theme
darkStyles.sendButton[':hover'] = {
  backgroundColor: '#0056b3',
};

// export default Chatbot;
