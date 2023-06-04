import { useState } from "react";

import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card title="Card 1" description="sdfasdas d asd asd as da sd ad as d" />
    </>
  );
}

export default App;
