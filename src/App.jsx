import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import { useContext } from 'react'
import { AuthContext } from './Providers/Providers';

function App() {

  const { background } = useContext(AuthContext);

  return (
    <div style={{ backgroundImage: `url(${background})`, objectFit: "contain" }}>
      <div className="hero-overlay bg-opacity-60">
        <Navigation></Navigation>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
