import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/contacts'
import Edit from './components/edit'
import Add from './components/add'
import View from './components/view'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import view from './components/view'
import edit from './components/edit'
import add from './components/add'


function App() {
  const [count, setCount] = useState(0)



  return (
   
    <>
    {/* <Contacts/> */}
   <BrowserRouter>
   <Routes>

      <Route path='/' Component={Contacts}/>
      <Route path='/add' Component={add}/>
      <Route path='/view/:id' Component={view}/>
      <Route path='/edit/:id' Component={edit}/>

   </Routes>
   
   
   </BrowserRouter>
   
    </>
  )
}

export default App
