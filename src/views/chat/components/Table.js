import React, { lazy, useState } from "react";

import {
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPaginationItem,
  CPagination,
} from "@coreui/react";

const FilterTable = React.lazy(() => import("./FilterTable"));

/**
 * Question Table
 */
const AccountTable = ({
  maxPages,
  pageNumber,
  setPageNumber,
  children,
  tableHeaderCells,
  filters,
  filterErrors,
  handleFilterChange,
  handleFilterSubmit,
  handleClearFilter,
  handlePageChangeNext,
  handlePageChangePrevious,
  showFilter,
  reloadData, 
  filterOptions
}) => {
  // Return pagination items
  const PaginationPages = () => {
    const items = [];
    for (let i = 1; i <= maxPages; i++) {
      items.push(
        <CPaginationItem
          key={i}
          active={i === pageNumber}
          // onClick={() => {
          //   setPageNumber(i);

          // }}
        >
          {i}
        </CPaginationItem>
      );
    }
    return items;
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5">
        {showFilter && (
          <FilterTable
            filters={filters}
            filterErrors={filterErrors}
            filterOptions={filterOptions}
            handleFilterChange={handleFilterChange}
            handleFilterSubmit={handleFilterSubmit}
            handleClearFilter={handleClearFilter}
            reloadData={reloadData}
          />
        )}
        <CTable>
          <CTableHead>
            <CTableRow>
              {tableHeaderCells.map((cell, index) => (
                <CTableHeaderCell key={index} scope="col">
                  {cell}
                </CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          {children}
        </CTable>
        {maxPages != 1 && (
          <div className="flex justify-end">
            <CPagination aria-label="Page navigation example" className="">
              <CPaginationItem
                disabled={pageNumber == 1}
                aria-label="Previous"
                onClick={handlePageChangePrevious}
              >
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              {PaginationPages()}

              <CPaginationItem
                disabled={pageNumber == maxPages}
                aria-label="Next"
                onClick={handlePageChangeNext}
              >
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountTable;
