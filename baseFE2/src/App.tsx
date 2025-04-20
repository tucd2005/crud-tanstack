import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./todos/List";
import Create from "./todos/Create";
import Edit from "./todos/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<List />} />
        <Route path="/add" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="" element={<List />} />
        <Route path="" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
