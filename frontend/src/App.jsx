import './pages/Game.jsx';
import './App.css'
import axios from 'axios';
import Game from './pages/Game.jsx';
import Submit from './components/Submit.jsx';

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:3000/";

  return (
    <>
      <Game />
      <Submit />
    </>
  )
}

export default App
