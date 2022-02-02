import Header from "./Header";
import SearchInput from "./SearchInput";
import TodoLists from "./TodoLists";

const TopGrid = () => {
  return (
    <div className="top-grid">
      <div className="shiny-background"></div>
      <div className="absolute">
        <div className="container-grid">
          <Header/>
         <SearchInput/>
          <TodoLists/>
          <div className="hint">Drag and drop to reorder list</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopGrid;
