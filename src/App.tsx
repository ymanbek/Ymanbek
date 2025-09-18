import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>my project</h1>
      <Input value={value} onChange={setValue} />
      <h1>{value}</h1>
    </div>
  );
}

export default App;
