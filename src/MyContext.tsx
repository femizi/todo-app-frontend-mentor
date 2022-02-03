import React from "react";
import { useState, useEffect } from "react";

export const DataContext = React.createContext([]);

export function DataList(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal   }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    
  }, [data]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
}