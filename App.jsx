import { useState } from "react";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function App() {
  const [id, setId] = useState(0);
  const [type, setType] = useState("movie");

  return (
    <>
      {id > 0 ? (
        <Detail id={id} type={type} setId={setId}/>
      ) : (
       <Home id={id} setId={setId} setType={setType} type={type}/> 
      )}
    </>
  );
}
