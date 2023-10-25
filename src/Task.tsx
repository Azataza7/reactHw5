import React from 'react';

interface Props {
  text: string;
}

const Task:React.FC<Props> = ({text}) => {
  return (
    <div className="task-block">
      <p>${text}</p>
      <div className="action-buttons">
        <button className="doneBtn">done</button>
        <button className="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

export default Task;