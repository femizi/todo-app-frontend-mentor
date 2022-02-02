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
  return (
    <>
      <div className="todo-lists">
        <DragDropContext>
          <Droppable droppableId="to-dos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {data.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Todo
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                        key={data.id}
                        item={data}
                        deleteItem={deleteItem}
                        index={index}
                        className={
                          snapshot.isDragging ? "selected" : "not-selected"
                        }
                      />
                    )}
                  </Draggable>
                ))}
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
