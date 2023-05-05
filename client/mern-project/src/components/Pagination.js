import React from "react";

function Pagination({ nPages, currentPage, handleCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <div className="pageNav">
      <a onClick={() => handleCurrentPage(currentPage - 1)} href="#" className="pageNav_item"> {'<<'} </a>
      {
        pageNumbers.map(pgNumber => {
          const className = pgNumber === currentPage ? "pageNav_item active":"pageNav_item";
          return <a key={pgNumber} onClick={(event) => handleCurrentPage(pgNumber)} href= "#" className={className}>
            {pgNumber}
          </a>
        })
      }
      <a onClick={() => handleCurrentPage(currentPage + 1)} href="#" className="pageNav_item">{'>>'} </a>
    </div>
  );
}
export default Pagination;