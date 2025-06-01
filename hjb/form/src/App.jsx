import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import Diary from "./components/Diary";

export default function App(){
  return(
    <Router>
      <h1>Todo List</h1>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todo/:id" element={<TodoDetail />}/>
        <Route path="/diary" element={<Diary />}/>
      </Routes>
    </Router>
  );
}
