import { Outlet } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './Providers/Providers';
import NavWhite from './components/NavWhite/NavWhite';

function App() {

  const { background } = useContext(AuthContext);

  return (
    <div style={{ backgroundImage: `url(${background})`, objectFit: "contain" }}>
      <div className="hero-overlay bg-opacity-40">
        <NavWhite></NavWhite>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
