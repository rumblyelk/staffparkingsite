import { useState } from "react";
import "./App.css";
import spots from "./spots.json";
import ListItem from "./ListItem";

function App() {
  const [queriedSpots, setQueriedSpots] = useState([]);
  const [spotsStart, setSpotsStart] = useState(0);
  const [spotsEnd, setSpotsEnd] = useState(9);

  function handleClick(e) {
    e.preventDefault();
    setQueriedSpots([]);
    for (let i = spotsStart; i < spotsEnd; i++) {
      setQueriedSpots((prevSpots) => [...prevSpots, spots[i]]);
    }
    if (spotsEnd + 10 <= spots.length) {
      setSpotsStart(spotsStart + 10);
      setSpotsEnd(spotsEnd + 10);
    } else {
      setSpotsStart(0);
      setSpotsEnd(9);
    }
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={(e) => handleClick(e)}>Log response</button>
      <ul>
        {queriedSpots.map((s, i) => (
          <ListItem key={i} spot={s} />
        ))}
      </ul>
      {/* {JSON.stringify(queriedSpots)} */}
    </div>
  );
}

export default App;
