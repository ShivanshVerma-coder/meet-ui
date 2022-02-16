import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [members, setMembers] = useState(1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(findWidth(members));
  }, [members]);

  const findWidth = (n) => {
    let x = Math.ceil(n / Math.floor(Math.sqrt(n)));
    return parseInt(Math.floor(100 / x)); // assuming 100vw is the width of the container--->replace 100 by desired vw value
  };

  useEffect(() => {
    setInterval(() => {
      setMembers((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        {Array.from({ length: members }, (_, i) => i).map((_, i) => (
          <div
            className="children"
            style={{
              width: width - 3 + "vw",
              height: 100 / Math.floor(Math.sqrt(members)) - 3 + "vh",
              maxHeight: (16 / 9) * (width - 3) - 3 + "vh",
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// 1->1row -> width:100
// 2->1row -> width:50
// 3->1row -> width:33
// 4->2row 2x2 -> width:50
// 5->2row 3x2 or 2x3 width:33
// 6->2row 3x3 width:33
// 7->2row 3x4 or 4x3 width:25
// 8->2row 4x4 width:25
// 9->3row 3x3x3 width:33
// 10->3row 3x3x4 width:25 --> 4x4x2
// 11->3row 3x4x4 width:25 --> 4x4x3
// 10->3row 3x3x4
