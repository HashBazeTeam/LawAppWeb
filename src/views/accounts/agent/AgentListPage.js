import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import store, { accessToken } from "src/store";
import { toast } from "react-toastify";
import { deleteEmptyKeys } from "src/utils/function";
import { useDispatch } from "react-redux";

// Components
import { LoadingIndicator } from "src/components";
const AccountTable = React.lazy(() => import("../AccountTable"));
const BSTableBody = React.lazy(() => import("../UserAccountTableBody"));

/**
 * Agent List page
 */
const AgentListPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentLocation = useLocation().pathname;

  const [loading, setLoading] = useState(false);
  const [bsAccounts, setBsAccounts] = useState([]);
  const [filteredData, setFilteredBSAccounts] = useState([]);
  const [filters, setFilters] = useState({
    branchName: "",
    status: "",
    accountType: "",
  });
  const [filterErrors, setFilterErrors] = useState({});
  const [accountsType, setAccountsType] = useState("");
  /*
   * Account Type
   */
  // Get account types

  /*
   * Fetch User Accounts
   */
  useEffect(() => {
    let isSubscribed = true;

    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  /**
   * Handle Filter Change
   * No need in this table
   */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filterItems = deleteEmptyKeys(filters);
    const filteredAccounts = bsAccounts.filter((account) => {
      for (let key in filterItems) {
        if (filterItems[key] != account[key]) return false;
      }
      return true;
    });
    setFilteredBSAccounts(filteredAccounts);
  };

  const handleClearFilter = () => {
    setFilters({ branchName: "", status: "", accountType: "" });
    setFilteredBSAccounts(bsAccounts);
  };

  // Handle pagination
  const maxPages = 1;
  const [pageNumber, setPageNumber] = useState(1);

  const tableHeaderCells = [
    "Full Name",
    "Country",
    "Email",
    "Phone Number",
    "",
  ];

  return (
    <>
      {loading ? (
        <div className="flex justify-center"> {LoadingIndicator("lg")} </div>
      ) : (
        <AccountTable
          accounts={filteredData}
          maxPages={maxPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          tableHeaderCells={tableHeaderCells}
          filters={filters}
          filterErrors={filterErrors}
          handleFilterChange={handleFilterChange}
          handleFilterSubmit={handleFilterSubmit}
          handleClearFilter={handleClearFilter}
          accountsType={accountsType}
        >
          <BSTableBody accounts={filteredData} />
        </AccountTable>
      )}
    </>
  );
};

export default AgentListPage;
