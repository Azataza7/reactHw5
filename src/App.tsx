import React, {useState} from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

function App() {
  const [taskList, setTaskList] = useState([
    {id: '1', text: 'Buy milk', done: false},
    {id: '2', text: 'Walk with dog', done: false},
    {id: '3', text: 'Watch news', done: false},
    {id: '4', text: 'Read smth boring', done: false},
  ]);

  const addCurrentTask = (newTaskText) => {
    if (newTaskText) {
      const taskListCopy = [...taskList];
      const newTask = {
        id: `${Date.now()}`,
        text: newTaskText,
        done: false,
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

  const toggleTaskDone = (taskId) => {
    const taskListCopy = taskList.map((task) => {
      if (task.id === taskId) {
        return {...task, done: !task.done};
      }
      return task;
    });

    setTaskList(taskListCopy);
  };

  const showTaskList = taskList.map((task, index) => {
    return (
      <Task key={index} text={task.text} id={task.id} deleteTask={() => deleteTask(index)}
            done={task.done} toggleTaskDone={() => toggleTaskDone(task.id)}
      />
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
