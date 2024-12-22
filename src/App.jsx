import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
///import UserContext from './context/UserContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hello Ji</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
