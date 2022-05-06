import './App.css'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      <h1>User Authentification</h1>
      {isAuthenticated ? 
      <>
        <Profile />
      </>
      : <LoginButton/>}   
    </div>
  )
}

export default App
