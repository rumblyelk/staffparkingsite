import { useEffect, useState } from "react";
import "./App.css";
import spots from "./spots.json";
import ListItem from "./components/ListItem";
import Nav from "./components/Nav";

function App() {
  const [queriedSpots, setQueriedSpots] = useState([]);
  const [spotsIndex, setSpotsIndex] = useState(0);
  const spotsRange = 10;
  const spotsArray = Object.entries(spots);

  function updateSpots() {
    setSpotsIndex((prevIndex) => {
      const isEndOfArray = prevIndex + spotsRange >= spotsArray.length;
      const workingRange = isEndOfArray
        ? spotsArray.length - prevIndex
        : spotsRange;

      setQueriedSpots(spotsArray.slice(prevIndex, prevIndex + workingRange));
      return isEndOfArray ? 0 : prevIndex + spotsRange;
    });
  }

  useEffect(() => {
    updateSpots();

    const interval = setInterval(updateSpots, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Nav />
      <ul>
        {queriedSpots.map((s, i) => (
          <ListItem key={s[0]} spot={s} />
        ))}
      </ul>
    </div>
  );
}

export default App;
