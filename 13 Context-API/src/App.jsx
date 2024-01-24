
import './App.css'
import UserContextProvider from './Contexts/User/UserContextProvider'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'


function App() {
  

  return (
    
    <UserContextProvider>
     
      <SignUp/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
