import { useState } from "react";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";

export default function App() {
  const [id, setId] = useState(0);
  const [type, setType] = useState("movie");
  const [searchable, setSearchable] = useState(false);
  const [query, setQuery] = useState("thor");


  return (
    <>
      {id > 0  ? (
        <Detail id={id} type={type} setId={setId} />
      ) : (
        <>
          {!searchable ? (
            <Home
              id={id}
              setId={setId}
              setType={setType}
              type={type}
              setSearchable={setSearchable}
              
            />
          ) : (
            <Search query={query} setQuery={setQuery}  setSearchable={setSearchable} setId={setId}/>
          )}
        </>
      )}
    </>
  );
}
