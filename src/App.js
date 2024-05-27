import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";

const localData = () => {
  let list = localStorage.getItem("data")
  if(list) {
    return JSON.parse(list)
  }else{
    return []
  }
}


function App() {
  const [todoList,setToDoList] = useState(localData())
  const [newTask, setNewTask] = useState("")


// add task
  const addTask = (e) => {
    e.preventDefault()
    let task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName:newTask,
      completed:false
    }
  let newToDoList=[...todoList,task]
  setToDoList(newToDoList)
  setNewTask("")
  }
  //useeffect
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList))
  },[todoList])



   
  //delete task
const deleteTask = (id) => {
  let newTodoList = todoList.filter((item) => {
   return item.id !== id
  })
  setToDoList(newTodoList)
}
  //completed 
  const isCompleted =(id) =>{
     setToDoList(todoList.map((item) =>{
      if(item.id === id){
        return{...item,completed:true}
      }else{
        return item
      }
     }))
  }

  //update task
  const updateTask =(id)=>{
let  changeTask=todoList.find((item) =>{
return item.id === id
})

let newToDoList=todoList.filter((item)=>{
return item.id !== id
})
setNewTask(changeTask.taskName)
setToDoList(newToDoList)
  }
  return (
  <div className="bg-black text-white w-full min-h-screen ">
 <form className="flex justify-center pt-36 gap-10">
  <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="w-[400px] px-6 py-2  rounded-md bg-gray-700 border-none outline-none"/>
  <button onClick={addTask} className="bg-pink-500 px-6 py-2 rounded-md border-none outline-none">Add Task</button>
  
 </form>
 
 <div className="text-center pt-10">
  {
    todoList && todoList.map((item,index)=>{
      return(
        <ToDo key={item.id} deleteTask={deleteTask} updateTask={updateTask} index={index} taskName={item.taskName} id={item.id} isCompleted={isCompleted} completed={item.completed}/>

      )
    })
  }
 </div>
  </div>
   
  );
}

export default App;
