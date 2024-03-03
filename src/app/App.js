import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Tracker from "../components/Tracker";
import NewTopicForm from "../components/NewTopicForm";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route path="tracker" element={<Tracker/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}