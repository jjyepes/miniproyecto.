import {useState, useEffect} from 'react'
import './App.css';
import { TaskCreator } from './componets/TaskCreator'
import {TaskTable} from './componets/TaskTable'

function App() {

const [tasksItems, setTasksItems] = useState([])

function createNewTask(taskName) {
 if (!tasksItems.find(taks => taks.name === taskName)) {
  setTasksItems([...tasksItems, {name: taskName, done: false}])
 }
}

useEffect(() => {
 let data = localStorage.getItem('tasks')
 if (data) {
  setTasksItems(JSON.parse(data))
 }
}, [ ])

useEffect(() => {
localStorage.setItem('taks', tasksItems, JSON.stringify(tasksItems))
},[ tasksItems ])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks={tasksItems}/>
    </div>
  );
}

export default App;