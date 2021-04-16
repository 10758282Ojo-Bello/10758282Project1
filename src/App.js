import './App.css';
import { BrowserRouter,Route } from "react-router-dom"
import Login from "./Screens/Login.js"
import Register from "./Screens/Register.js"
import Homescreen from './Screens/Homescreen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='homepagenav'>Hello from 10758282</h1>
        <Route path = {"/login"} component= {Login} />
        <Route path = {"/register"} component= {Register} />
        <Route path = {"/"} component= {Homescreen} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
