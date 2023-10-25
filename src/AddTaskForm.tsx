import React, {useState} from 'react';

interface Props {
  addCurrentTask: (newTaskText) => void;
}

const AddTaskForm: React.FC<Props> = ({addCurrentTask}) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCurrentTask(newTaskText);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new task"
             onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button className="add-task">Add</button>
    </form>
  );
};

export default AddTaskForm;