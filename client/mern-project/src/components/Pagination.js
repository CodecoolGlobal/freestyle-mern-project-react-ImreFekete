import React from "react";

function Pagination({ nPages, currentPage, handleCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <div className="pageNav">
      <nav>
        <ul>
          <li className="pageNav_item">
            <a onClick={()=> handleCurrentPage(currentPage-1)} href="#">Prev</a>
          </li>
          {
            pageNumbers.map(pgNumber => {
              return (
                <li key={pgNumber} >
                  <a onClick={() => handleCurrentPage(pgNumber)} href="#">
                    {pgNumber}
                  </a>
                </li>
              )
            })
          }
          <li className="pageNav_item">
            <a onClick={()=> handleCurrentPage(currentPage+1)} href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;