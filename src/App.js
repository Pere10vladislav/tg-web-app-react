import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  },[])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      
      <Header/>

        <h1>Hi</h1>
        <button onClick={onClose}>
          Закрыть приложение
        </button>
    </div>
  );
}

export default App;
