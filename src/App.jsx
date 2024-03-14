import { useEffect } from 'react';
import { Layout } from 'antd';
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
      <AppLayout/>
    </div>
  );
}

export default App;
