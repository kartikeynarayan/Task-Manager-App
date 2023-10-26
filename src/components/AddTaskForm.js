import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../reducers/taskReducer'

const TaskForm = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ title : '', description : '' })

  const { title, description } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const handleAddTask = () => {
    const id = Date.now().toString()
    const taskToAdd = { id, ...formData }
    dispatch(addTask(taskToAdd))
    setFormData({ title : '', description : '' })
  };

  return (
    <>
      <h2>Add Your Task</h2>
      <div>
        <label>Title :</label>
        <input 
          type = "text" 
          placeholder = 'Title' 
          autoComplete = 'off' 
          name = 'title' 
          value = {title} 
          onChange = {handleChange} 
        />
      </div>

      <div>
        <label>Description :</label>
        <input 
          type = "text" 
          placeholder = 'Description' 
          autoComplete = 'off' 
          name = 'description' 
          value = {description} 
          onChange = {handleChange} 
        />
      </div>

      <button onClick = {handleAddTask}>Add Task</button>
    </>
  )
}

export default TaskForm