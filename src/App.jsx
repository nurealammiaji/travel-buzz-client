import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  )
}

export default App
