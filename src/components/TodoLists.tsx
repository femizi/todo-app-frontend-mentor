import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DataContext } from "../MyContext";

const TodoLists = () => {
  const [data, setData] = useContext(DataContext);
  const [localData, setlocalData] = useState([]);
  let length = 0
  useEffect(()=>{
    if (data.length=== 0){
     
    }else {
      const temp = JSON.stringify(data);
      localStorage.setItem("local-data", temp)
      let perm = localStorage.getItem("local-data");
      let loadedPerm = JSON.parse(perm);
      setlocalData(loadedPerm)
      
      
      return 
    }
  },[data])
  length = data.length
  const deleteItem = (id: string) => {
    setData(data.filter((x) => x.id !== id));
  };
  const updateData = (id:string) =>{
    return data.map((item) => {
      if(item.id === id){
        item.complete = !item.complete
        console.log(item.id)
      }return item
    })
  }
 function completedChecked (localData) {
   setlocalData(updateData(localData))
 }
  const handleEnd = (result) => {
    console.log(result);
    if (!result.destination) return; //if no destination exits(cancel event), exit this function
    const items = Array.from(localData);
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
                {data.map((localData, index) => (
                  <Todo
                  completedChecked={completedChecked}
                    key={localData.id}
                    item={localData}
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
