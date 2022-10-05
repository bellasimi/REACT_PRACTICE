import { useState } from "react";

const Pagination = ({ defaultPage, limit, total, onChange }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);
  const pageLimit = 10;

  const handleClickPrevPage = () => {
    if (page > 0) {
      setPage((page) => page - 1);
      onChange(page - 1);
    }
  };

  const handleClickPage = (i) => {
    setPage(i);
    onChange(i);
  };

  const handleClickPostPage = () => {
    if (page < totalPage - 1) {
      setPage((page) => page + 1);
      onChange(page + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClickPrevPage}>이전</button>
      {Array.from(new Array(totalPage), (_, i) => i)
        .filter((i) => {
          if (page - 2 < 0) {
            return i < pageLimit;
          } else if (page + 2 > totalPage - 1) {
            return i > totalPage - 1 - pageLimit;
          } else {
            return i >= page - 2 && i <= page + 2;
          }
        })
        .map((i) => (
          <button
            key={i}
            style={{ backgroundColor: page === i ? "red" : null }}
            onClick={() => handleClickPage(i)}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={handleClickPostPage}>다음</button>
    </div>
  );
};

export default Pagination;
