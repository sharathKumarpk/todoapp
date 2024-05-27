```js
// ternary operator

function App() {
  let age = 19 
  let isGreen = true
  return (
    <div className="App">
     {age <25? "underage":"overage"}
     <h1 className={`${isGreen?"text-green-500":"text-red-500"}`} >This has color</h1>
     {
      isGreen && <button>hey it's green</button>
     }
    </div>
  );
}

export default App;

```
```js

//mapping
function App() {
  let users=["sharath","alvin","affan","lijo"]
  return (
    <div>
    {
      users.map((item)=>{
        return(
          <div>
            <h1>{item}</h1>
          </div>
        )
      }
    )
    }
    </div>
  );
}

export default App;

```
```js
function App() {
  let users=[
    {name:"sharath",age:19},
    {name:"alvin",age:20},
    {name:"shon",age:21},
  ]
  return (
  <div>
    {users.map((item, index) => {
      return (
        <div key={index}>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
          
        </div>
      )
    })}
  </div>
   
  );
}

export default App;
```
```js
//destructring (components,userdetails.jsx)
import React from 'react'

const UserDetails = ({name,age}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
          
        </div>
    </div>
  )
}

export default UserDetails
```
```js
import React from 'react'

const UserDetails = ({name,age}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
          
        </div>
    </div>
  )
}

export default UserDetails
```
```js
//some of reacts hoopks

/*
components : a component is an independent reusable peace of code they return HTML .There are class components and functional components
props :It is special keyword in react that stand for property it is used for passing data from one component to another data with props are passed inner unidirectional flow from parent to child

*/
```
```js
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

```