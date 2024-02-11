import Task from "./Task";
import "../style/Card.css"
import { useEffect, useState } from "react"
import { FaH, FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

export default function Card({ status }) {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem(status);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState(false) 
  const [taskInputValue, setTaskInputValue] = useState("")


  useEffect(() => {
    const retriveTaskList = JSON.parse(localStorage.getItem(status));
    if (retriveTaskList) setTaskList(retriveTaskList);
  }, []);


  const handleAddTask  = (event) => {
    if (event.key === 'Enter' && taskInputValue.trim() !== "") {
      const newTaskList = [
        ...taskList, 
        {id: uuidv4(),description: taskInputValue}]

      setTaskList(newTaskList)
      setTaskInput(false)
      setTaskInput("")
    }
  };

  useEffect(() => {
    localStorage.setItem(`${status}`, JSON.stringify(taskList));
    console.log(localStorage)
  }, [taskList]);
  

  const handleTaskDelete = (id) => {
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)


  }


  return (
    <div className="card">
      <div className="title">
        <h3>{status}</h3>
      </div>
      <div className="task_list">
        {
          taskList.map((task) => (
            <Task id={task.id} description={task.description} onDelete={handleTaskDelete}/>

          ))
        }

        {taskInput ? (<>
        

          <input 
        className="task_input"
        type="text"
        placeholder="Type your task here"
        onChange={e => setTaskInputValue(e.target.value)}
        onKeyDown={handleAddTask}
        
        />
        </>
        
        ) 
        : (<div></div>)}



        <div id="task-action">
          <button onClick={(e) => setTaskInput(true)}>
            <FaPlus />  Add task
          </button>
          <div id="task-history">
            <FaHistory />
          </div>
        </div>

      </div>
    </div>
  )
}