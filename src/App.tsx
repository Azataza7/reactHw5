import React, {useState} from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

function App() {
  const [taskList, setTaskList] = useState([
    {id: '1', text: 'Buy milk'},
    {id: '2', text: 'Walk with dog'},
    {id: '3', text: 'Watch news'},
    {id: '4', text: 'Read smth boring'},
  ]);

  const addCurrentTask = (newTaskText) => {
    if (newTaskText) {
      const taskListCopy = [...taskList];
      const newTask = {
        id: `${Date.now()}`,
        text: newTaskText,
      };

      taskListCopy.push(newTask);
      setTaskList(taskListCopy);
    }
  };

  const deleteTask = (index: number) => {
    const taskListCopy = [...taskList];
    taskListCopy.splice(index, 1);
    setTaskList(taskListCopy);
  };

  const showTaskList = taskList.map((task, index) => {
    return (
      <Task key={index} text={task.text} id={task.id} deleteTask={() => deleteTask(index)}/>
    );
  });

  return (
    <div className="App">
      <AddTaskForm addCurrentTask={addCurrentTask}/>
      {showTaskList}
    </div>
  );
}

export default App;
