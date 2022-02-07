
import { Draggable } from "react-beautiful-dnd";
const Todo = ({ item, deleteItem, index, completedChecked }) => {
  return (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={
            snapshot.isDragging ? "selected todo" : "not-selected todo"
          }
        >
          <label className="checkbox">
            <input type="checkbox" 
            onChange={()=> completedChecked(item.id)} 
            className="checkbox__input" />
            <div className="checkbox__checkmark"></div>
          </label>
          <span className={item.complete? "canceled": ""}> {item.name}</span>
          
          <button onClick={() => deleteItem(item.id)}>
            <img
              src="assets/images/icon-cross.svg"
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
