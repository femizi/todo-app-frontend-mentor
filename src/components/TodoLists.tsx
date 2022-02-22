import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DataContext } from "../MyContext";

const TodoLists = () => {
  const [data, setData] = useContext(DataContext);
  const [render, setrender] = useState(data);
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [uncompleted, setUncompleted] = useState(false);
  let length = 0;
 useEffect(() => {
   setrender(data)
 
   return () => {
     
   }
 }, [data])
 

  function showUncompleted() {
    setUncompleted(!uncompleted)
    setrender(isNotCompleted);
    
  }
  function showCompleted() {
    setCompleted(!completed)
    setrender(isCompleted);
    
  }
  function showAll() {
    
    setrender(data);
    setAll(!all)
  }
  length = render.length;
  const deleteItem = (id: string) => {
    setData(data.filter((x) => x.id !== id));
  };
  const isNotCompleted = () => data.filter((item) => !item.complete);
  const isCompleted = () => data.filter((item) => item.complete);
  const deleteCompleted = () => {
    setData(isNotCompleted);
  };
  const updateData = (id: string) => {
    return data.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
  };
  function completedChecked(id) {
    setData(updateData(id));
  }
  const handleEnd = (result) => {
    if (!result.destination) return; //if no destination exits(cancel event), exit this function
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };
  return (
    <>
    {console.log(completed)}
      <div className="todo-lists">
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="to-dos">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {render.map((render, index) => (
                  <Todo
                    completedChecked={completedChecked}
                    key={render.id}
                    item={render}
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
            <button
              className={all ? "blue" : ""}
              onClick={() => showAll()}
            >
              All
            </button>
            <button
              className={ uncompleted ? "blue" : ""}
              onClick={() => showUncompleted()}
            >
              Active
            </button>

            <button
              className={ completed ? "blue" : ""}
              onClick={() => {
                showCompleted();
              }}
            >
              Completed
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteCompleted();
              }}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
      <div className="second-group-btn">
        <button
          className={all ? "blue" : ""}
          onClick={() => showAll()}
        >
          All
        </button>
        <button
          className={ uncompleted ? "blue" : ""}
          onClick={() => showUncompleted()}
        >
          Active
        </button>
        <button
          className={ completed ? "blue" : ""}
          onClick={() => showCompleted()}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoLists;
