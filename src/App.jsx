import Cabecera from './components/Cabecera'
import TaskSearch from './components/taskSearch'
import TaskForm from './components/TaskForm'
import TaskRecetasNuevas from './components/TaskRecetasNuevas'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setNewTasks] = useState([]);

  const addTask = (task) => {
    setNewTasks([...tasks, task])
  }

  return(
    <>
    <Cabecera/>
    <TaskSearch/>
    <TaskForm/>
    </>
  )
}

export default App
