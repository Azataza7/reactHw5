import React from 'react';

interface Props {
  text: string;
  id: string;

}

const Task: React.FC<Props> = ({text, id}) => {
  return (
    <div className="task-block" id={id}>
      <p>{text}</p>
      <div className="action-buttons">
        <button className="doneBtn">done</button>
        <button className="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

export default Task;