import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import { useTelegram } from "./hooks/useTelegram"


function App() {
  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  },[])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      
      {/* <Header/> */}
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={'/form'} element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
