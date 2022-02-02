import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../MyContext";

const SearchInput = () => {
  
  const [data, setData] = useContext(DataContext);

  const id = nanoid();
  return (
    <div className="search-container">
      <input
        onKeyDown={(e) =>
          e.key === "Enter" &&
          setData([...data, { id, name: e.target.value, complete: false }])
        }
        type="text"
        placeholder="Create a new todo.."
      />
    </div>
  );
};

export default SearchInput;
