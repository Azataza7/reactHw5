import {useState} from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

function App() {
  const text = 'fhskjhfksdf'
  return (
    <div>
      <AddTaskForm/>
      <Task text={text}/>
    </div>
  );
}

export default App;
