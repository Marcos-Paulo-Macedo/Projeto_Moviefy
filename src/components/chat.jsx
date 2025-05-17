import React, { useState } from 'react';
import './chat.css';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (input.trim()) {
      const userMsg = { from: 'user', text: input };
      const botMsg = {
        from: 'ia',
        text: '🎥 Olá, eu sou o CineWise! Em breve, vou sugerir filmes, comentar e conversar com você sobre o que está assistindo!'
      };

      setMessages(prev => [...prev, userMsg, botMsg]);
      setInput('');
    }
  };

  return (
    <div className="chat-widget-container">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>CineWise 🎥</span>
            <button onClick={toggleChat} className="close-btn">×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.from}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default ChatWidget;
