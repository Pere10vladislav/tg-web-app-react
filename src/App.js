import { useEffect } from 'react';
import './App.css';
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
      <header className="App-header">
        <h1>Hi</h1>
        <button onClick={onClose}>
          Закрыть приложение
        </button>
      </header>
    </div>
  );
}

export default App;
