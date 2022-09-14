
import Settings from './components/settings.js';
import './App.css';
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) =>{
    setUser(text);
  }

  return (
    <div className="App">
      <Settings />
     
    </div>
  );
}

export default App;
