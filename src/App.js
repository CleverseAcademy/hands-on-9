import React, { useState } from 'react'
import './App.css'
import Task from './components/Task'

const initTasks = [
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn HTML',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn React',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn Node.js',
    isDone: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    todo: 'Learn useState',
    isDone: false,
  },
]

function App() {
  const [tasks, setTasks] = useState(initTasks)
  const [newTask, setNewTask] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()

    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000),
        todo: newTask,
        isDone: false,
      },
    ])

    setNewTask('')
  }

  const toggleTask = (index) => {
    const copyCurrentTask = [...tasks]

    // console.log(copyCurrentTask[index])
    copyCurrentTask[index].isDone = !copyCurrentTask[index].isDone

    setTasks(copyCurrentTask)
  }

  const deleteTask = (index) => {
    const copyCurrentTask = [...tasks]

    copyCurrentTask.splice(index, 1)

    setTasks(copyCurrentTask)
  }

  return (
    <div className="App">
      {/* Heading */}
      <h1>React Todo List</h1>

      {/* Form */}
      <form onSubmit={handleAdd}>
        <label>Add Todo List:</label>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} required />
        <input type="submit" value="Add" />
      </form>

      {/* Todo List Container */}
      <div className="todo-container">
        {tasks.map((task, index) => {
          return <Task key={task.id} task={task} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
