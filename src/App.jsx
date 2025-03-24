import { useState } from 'react'
import Header from './components/Header'
import Subheader from './components/Subheader'
import ListContainer from './components/ListContainer'
import TaskForm from './components/TaskForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Study React fundamentals',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Build TodoApp',
      description: 'Create a todo application with React',
      status: 'in progress'
    },
    {
      id: 3,
      title: 'Deploy application',
      description: 'Deploy the todo application',
      status: 'done'
    }
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
  };

  return (
    <>
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <main className="app__main">
        <TaskForm onAddTodo={addTodo} />
        <ListContainer todosList={todos} />
      </main>
    </>
  )
}

export default App 