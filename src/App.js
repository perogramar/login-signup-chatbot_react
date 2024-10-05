
import './App.css';
import LoginSignup from './Components/Pages/LoginSignup';
import Chatbot from './Components/Pages/Chatbot';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
          <Route path='/chatbot'element={<Chatbot />} />
    </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
