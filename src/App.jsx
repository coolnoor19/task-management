
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  

  return (
    <div className="container mx-auto mt-10 max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-center">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
