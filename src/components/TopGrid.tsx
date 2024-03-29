import { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import TodoLists from "./TodoLists";

const TopGrid = () => {
  const [theme, settheme] = useState(true);
  function handleClick(e) {
    e.preventDefault;
    settheme(!theme);
  }
  let image1 = "assets/images/icon-moon.svg";
  let image2 = "assets/images/icon-sun.svg";
  return (
    <div className={theme ? "top-grid" : "top-grid dark-mode"}>
      <div className="shiny-background">
       
        <Header
          handleClick={handleClick}
          image1={image1}
          image2={image2}
          theme={theme}
        />
      <SearchInput />

      </div>
      <div className="absolute">
        <div className="container-grid">
          
          <TodoLists />
          <div className="hint">Drag and drop to reorder list</div>
        </div>
      </div>
      
      
    </div>
  );
};

export default TopGrid;
