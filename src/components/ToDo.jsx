import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
const ToDo = ({deleteTask,updateTask,taskName,index,id,isCompleted,completed}) => {
  return (
    <div className="flex px-6 gap-10 justify-center">
          <h1 className={`${completed?"line-through text-green-400":"text-orange-400"}`}><span className="mr-2">{index+1}</span>{taskName}</h1>
          <DeleteIcon onClick={()=>{deleteTask(id)}}/>
          <DoneIcon onClick={() => {isCompleted(id)}}/>
          <EditIcon onClick={()=>{updateTask(id)}}/>
        </div>
  )
}

export default ToDo
