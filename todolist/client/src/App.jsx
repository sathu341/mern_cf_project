import { useState } from 'react'
import Addtodolist from './todolist/addtodolist'
import Viewtodolist from './todolist/viewtodolist'
import { Route, Routes } from 'react-router-dom'
import { lazy,Suspense } from 'react'

function App() {
  const Add=lazy(()=>import('./todolist/addtodolist'))
  const View=lazy(()=>import('./todolist/viewtodolist'))
  const Edit=lazy(()=>import('./todolist/edit'))
  const Userreg=lazy(()=>import("./user/userregister"))
  const Login=lazy(()=>import("./user/login"))
  const Userhome=lazy(()=>import("./user/userhome"))
  const Home=lazy(()=>import("./home"))

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/view" element={<View></View>}></Route>
      <Route path="/add" element={<Add/>}/> 
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/userreg" element={<Userreg/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Userhome/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Suspense>
  
      
    </>
  )
}

export default App
