import './App.css';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';

function App() {
  const modalActive = useSelector(state => state.funcSlice.modalActive)
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('token')) navigate('/signIn') 
  }, [navigate])

  return <section className='app'>
      <Routes>
        {/* <Route path='/' element={<Splush />} /> */}
        <Route path='/signUp' element={<Registration />} />
        <Route path='/signIn' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
      {modalActive && <ModalWindow/>}
  </section>
}

export default App;
