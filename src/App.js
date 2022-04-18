import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PostDetails from "./pages/postDetail/PostDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r/:redditUser/comments/:clientId/:title" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
