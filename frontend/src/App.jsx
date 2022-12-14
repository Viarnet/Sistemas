
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Private } from './pages/Private';

function App() {

  return (
    <Routes>
    <Route path='/login' element={ <Login /> }/>
    <Route path='/' element={ <Layout /> }>
      <Route path='home' element={ <RequireAuth role={0}><Home /></RequireAuth> }/>
      <Route path='privada' element={ <RequireAuth role={1}><Private /></RequireAuth> }/>
    </Route>
  </Routes>
    
  )
}

export default App
