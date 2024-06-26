import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import UpdateTaskForm from './UpdateTaskForm';
import axios from 'axios';
import { API_URL } from '../utils';

const AddTaskForm = ( { fetchTasks }) => {
  const [newTask, setNewTask] = useState('')

  const addNewTask = async () => {
    try {
      await axios.post(API_URL, {
        name: newTask,
        completed: false,
      })

      await fetchTasks()
      setNewTask(''); //clear input field
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Typography align="center" variant='h2' paddingTop={2}>My Task List</Typography>

      <div className="addTaskForm">
        <TextField size='small' label="Task" variant="outlined" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>

        <Button disabled= {!newTask.length} variant="outline" onClick={addNewTask}>
          <AddIcon />
        </Button>
      </div>
    </div>
    
  )
}

export default AddTaskForm