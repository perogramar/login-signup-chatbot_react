import React, { useState } from 'react';
import logo_icon from '../Assets/logo-ai.png';
import user_icon2 from '../Assets/user_icon.png';
import delete_icon from '../Assets/delete.png';
import edit_icon from '../Assets/edit.png';
import './Chatbox.css';

const Chatbot = () => {
  const [query, setQuery] = useState("0");
  const [placeholder, setPlaceholder] = useState("Enter your marketing query here...");
 
  const [message, setMessage] = useState("");

  const handleQueryChange = (event) => {
    const selectedValue = event.target.value;
    setQuery(selectedValue);
    
    // Update placeholder based on selection
    if (selectedValue === "0") {
      setPlaceholder("Enter your sales query here...");
    } else if (selectedValue === "1") {
      setPlaceholder("Enter your marketing query here...");
    }
  };

  

  

  return (
    <>
      <div>
        <div className='main-header'>
          <img src={logo_icon} className='main_logo' alt='Logo' />
        
          <select id="querySelect" className="custom-select" value={query} onChange={handleQueryChange}>
            <option value="0">Sales</option>
            <option value="1">Marketing</option>
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
            <p className="history"><img src="https://cdn1.iconfinder.com/data/icons/freeline/32/alarm_alert_clock_event_history_schedule_time_watch-256.png" width="25px"alt="history" />  History</p>
          </div>
          <div className='two'>
            <ul className="chathistory">
              
                <li >New Chat
                  
                  <img classname='edit-del' width="20px" src={edit_icon} alt="Edit" />
                  <img classname='edit-del' width="20px" src={delete_icon} alt="Delete"  />
                </li>
                <li >What is marketing? 
                  
                  <img classname='edit-del' width="20px" src={edit_icon} alt="Edit" />
                  <img classname='edit-del' width="20px" src={delete_icon} alt="Delete"  />
                </li>
                <li >Give me a list of. 
                  
                  <img classname='edit-del' width="20px" src={edit_icon} alt="Edit" />
                  <img classname='edit-del' width="20px" src={delete_icon} alt="Delete"  />
                </li>
              
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
         
          </div>

          {/* Input area for sending messages */}
          <div className='message-input'>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={placeholder} // Use dynamic placeholder
             
            />
            <button className='lastbutton'>Send</button>
          </div>
        </div>
      
    </>
  );
}

export default Chatbot;
