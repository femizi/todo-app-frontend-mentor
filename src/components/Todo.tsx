import React, { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
const Todo = ({ item, deleteItem }) => {
  const innerRef = useRef();
  return (
    <Draggable>
      {(provided, snapshot) => (
        <li
          {...provided.draggableProps}
          innerRef={provided.innerRef}
          {...provided.dragHandleProps}
          className={
            snapshot.isDragging ? "selected todo" : "not-selected todo"
          }
        >
          <label className="checkbox">
            <input type="checkbox" className="checkbox__input" />
            <div className="checkbox__checkmark"></div>
          </label>
          {item.name}
          <button onClick={() => deleteItem(item.id)}>
            <img
              src="src\images\icon-cross.svg"
              className="delete-img"
              alt="delete"
            />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Todo;
