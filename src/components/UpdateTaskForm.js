import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../reducers/taskReducer'

const UpdateTaskForm = ({ task, onCancelEdit }) => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const handleUpdate = () => {
    dispatch(updateTask(formData))
    onCancelEdit()
  }

  return (
    <>
      <div>
        <label>Title :</label>
        <input 
          type = "text" 
          placeholder = 'Title' 
          autoComplete = 'off' 
          name = 'title' 
          value = {formData.title} 
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
          value = {formData.description} 
          onChange = {handleChange} 
        />
      </div>

      <button onClick = {handleUpdate}>Update Task</button>
      <button onClick = {onCancelEdit}>Cancel Task</button>
    </>
  )
}

export default UpdateTaskForm