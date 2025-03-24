import { useState } from 'react'
import PropTypes from 'prop-types'
import './TaskForm.css'

const TaskForm = ({ onAddTodo }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending'
  })
  
  const [errors, setErrors] = useState({
    title: false,
    description: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask({
      ...task,
      [name]: value
    })
    
    // Reset error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {
      title: !task.title.trim(),
      description: !task.description.trim()
    }
    
    if (newErrors.title || newErrors.description) {
      setErrors(newErrors)
      return
    }
    
    // Submit form
    onAddTodo(task)
    
    // Reset form
    setTask({
      title: '',
      description: '',
      status: 'pending'
    })
  }

  return (
    <div className="task-form-container">
      <h3 className="task-form__title">Add New Task</h3>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form__group">
          <label htmlFor="title" className="task-form__label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className={`task-form__input ${errors.title ? 'task-form__input--error' : ''}`}
            placeholder="Enter task title"
          />
          {errors.title && <span className="task-form__error">Title is required</span>}
        </div>
        
        <div className="task-form__group">
          <label htmlFor="description" className="task-form__label">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className={`task-form__textarea ${errors.description ? 'task-form__textarea--error' : ''}`}
            placeholder="Enter task description"
            rows="3"
          />
          {errors.description && <span className="task-form__error">Description is required</span>}
        </div>
        
        <div className="task-form__group">
          <label htmlFor="status" className="task-form__label">Status</label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
            className="task-form__select"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        
        <button type="submit" className="task-form__button">Add Task</button>
      </form>
    </div>
  )
}

TaskForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default TaskForm 