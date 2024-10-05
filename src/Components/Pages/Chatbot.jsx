import React, { useState } from 'react';
import logo_icon from '../Assets/logo-ai.png';
import user_icon2 from '../Assets/user_icon.png';
import delete_icon from '../Assets/delete.png';
import edit_icon from '../Assets/edit.png';
import './Chatbox.css';

const Chatbot = () => {
  const [query, setQuery] = useState("0");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "New Chat" },
    { id: 2, text: "What is marketing?" },
    { id: 3, text: "Give me a list of." }
  ]);
  const [message, setMessage] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDelete = (id) => {
    setChatHistory(chatHistory.filter(chat => chat.id !== id));
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { id: chatHistory.length + 1, text: message }]);
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <>
      <div>
        <div className='main-header'>
          <img src={logo_icon} className='main_logo' alt='Logo' />
        
          <select id="querySelect" className="custom-select" value={query} onChange={handleQueryChange}>
            <option value="0">Enter your sales query here..</option>
            <option value="1">Enter your marketing query here...</option>
          </select>
          <div className='usericon'>
            <p className='user2'>
              <img src={user_icon2} alt="User Icon" className='user_icon2' />Nitin
            </p>
          </div>
        </div>
      </div>
      <div className='container2'>
        <div className='sidebar'>
          <div className='one'>
            <p className='chatbar'>New Chat</p>
            <p className="history"><img src="https://cdn1.iconfinder.com/data/icons/freeline/32/alarm_alert_clock_event_history_schedule_time_watch-256.png" width="20px"alt="history" />History</p>
          </div>
          <div className='two'>
            <ul className="chathistory">
              {chatHistory.map(chat => (
                <li key={chat.id}>
                  {chat.text}
                  <img width="20px" src={edit_icon} alt="Edit" />
                  <img width="20px" src={delete_icon} alt="Delete" onClick={() => handleDelete(chat.id)} />
                </li>
              ))}
            </ul>
          </div>
          <div className='three'>
            <ul className='siteinfo'>
              <li>Upgrade to Plus</li>
              <li>Updates & FAQ</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy Page</li>
            </ul>
          </div>
        </div>
        <div className='chatbox'>
          {/* Display chat messages */}
          <div className='messages'>
            {chatHistory.map(chat => (
              <div key={chat.id} className='message'>
                {chat.text}
              </div>
            ))}
          </div>

          {/* Input area for sending messages */}
          <div className='message-input'>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
