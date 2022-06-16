import React from 'react';

const Todo = ({ todo, onDelete }) => {

  const handleDelete = (id) => {
    onDelete(id);
    // setChecked(true);
  };

  return (
    <div className="input-group  animate__animated animate__faster animate__fadeInDown mb-3 alert alert-light p-1" role="alert">
      <div className="d-flex justify-content-between align-items-baseline w-100 px-2">
        <p className={'w-100 fs-6 text-break m-0 py-1 px-3'} aria-label="Text input with checkbox">
          {todo.text}
          <span className="d-block text-muted" style={{ fontSize: '10px' }}>
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </p>
        <div className="todo-action ">
          <button
            type="button"
            className="btn-close btn-danger p-1 fs-6"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => handleDelete(todo._id)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
