import React from "react";

const TopGrid = () => {
  return (
    <div className="top-grid">
      <div className="shiny-background"></div>
      <div className="absolute">
        <div className="container-grid">
          <div className="header">
            <div>
              
              <h1>Todo</h1>
            </div>

            <div>
              <img src="src\images\icon-moon.svg" alt="" />
            </div>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Create a new todo.." />
          </div>
          <div className="todo-lists">
            <ul>
              <li className="todo">
                <input type="checkbox" name="checkbox" />
                Jog around the park
                <img src="src\images\icon-cross.svg" alt="" />
              </li>
              <li className="todo">
                <input type="checkbox" name="checkbox" />
                Jog around the park
                <img src="src\images\icon-cross.svg" alt="" />
              </li>
            </ul>

            <div className="todo-footer">
              <div>
                <button>items left</button>
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

          <div className="hint">
          Drag and drop to reorder list
          </div>
         
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopGrid;
