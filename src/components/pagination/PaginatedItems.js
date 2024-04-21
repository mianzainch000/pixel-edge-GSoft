"use client";
import React from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems(props) {
  const handlePageClick = (event) => {
    props.paginationPageNumberMethod(event.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        pageCount={props?.blogs?.meta?.pagination?.pageCount || 1}
        breakLabel="..."
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        nextLabel="next >"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        onPageChange={(e) => handlePageClick(e)}
      />
    </>
  );
}

export default PaginatedItems;
