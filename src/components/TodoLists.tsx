import React, { useContext } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "../MyContext";

const TodoLists = () => {
  const [data, setData] = useContext(DataContext);
  const deleteItem = (id: string) => {
    setData(data.filter((x) => x.id !== id));
  };
  length = data.length;
  const handleEnd = (result) => {
    console.log(result);
    if (!result.destination) return; //if no destination exits(cancel event), exit this function
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };
  return (
    <>
      <div className="todo-lists">
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="to-dos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {data.map((data, index) => (
                  <Todo
                    key={data.id}
                    item={data}
                    deleteItem={deleteItem}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <div className="todo-footer">
          <div>
            <button>{length} items left</button>
          </div>
          <div className="group-btn">
            <button>All</button>
            <button>Active</button>

            <button>Completed</button>
          </div>
          <div>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
      <div className="second-group-btn">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
};

export default TodoLists;
