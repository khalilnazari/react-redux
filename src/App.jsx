import { useState } from "react";
import Counter from "./features/counter/Counter";
import Post from "./features/Post/Post";

function App() {
  return (
    <div className="container">
      {/* <Counter /> */}
      <Post />
    </div>
  );
}

export default App;
