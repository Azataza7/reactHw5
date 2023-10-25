import React from 'react';

interface Props {
  text: string;
  id: string;
  deleteTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({text, id, deleteTask}) => {
  return (
    <div className="task-block" id={id}>
      <p>{text}</p>
      <div className="action-buttons">
        <button className="doneBtn">done</button>
        <button className="deleteBtn" onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;