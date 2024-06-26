import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; 
import CheckIcon from '@mui/icons-material/Check'; 
import axios from 'axios';
import { API_URL } from '../utils';

const UpdateTaskForm = ({
  fetchTasks,
  isDialogOpen, 
  setIsDialogOpen, 
  task,
}) => {
  const {id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskName = async () => {
    try {
      await axios.put(API_URL, {
        id, name: taskName, completed,
        //only thing we update is the taskName
      });
      //refresh taskdata
      await fetchTasks();

      setTaskName('');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog open={isDialogOpen}>
      <DialogTitle>Edit Task</DialogTitle>
      <div className="dialog">
        <TextField size="small" label="Task" variant="outlined" onChange={(e) => setTaskName(e.target.value)}/>
        <Button 
          variant='contained' 
          onClick={async () => {
            await handleUpdateTaskName();
            setIsDialogOpen(false);
          }}
        >
          <CheckIcon />
        </Button>
      </div>
    </Dialog>
  )
}

export default UpdateTaskForm;