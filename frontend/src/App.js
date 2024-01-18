import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Adminhome from "./components/Admin";
import PostMember from "./components/AddMember";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/admin" element={<Adminhome/>} />
    <Route path="/memberlist" element={<PostMember/>} />

    </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
