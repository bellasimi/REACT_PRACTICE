import Board from "component/Board";
import Pagination from "component/Pagination";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;

  const array = new Array(200)
    .fill()
    .map((_, i) => ({ id: i, title: `${i}번째 게시물` }));

  return (
    <div className="App">
      <Pagination
        defaultPage={0}
        limit={10}
        total={array.length}
        onChange={setPage}
      />
      <Board articles={array.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;
