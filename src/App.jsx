import Cabecera from './components/Cabecera'
import TaskSearch from './components/taskSearch'
import TaskForm from './components/TaskForm'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <>
    <Cabecera/>
    <TaskSearch/>
    <TaskForm/>
    </>
  )
}

export default App
