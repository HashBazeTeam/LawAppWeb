import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import store, { accessToken } from "src/store";
import { toast } from "react-toastify";
import { deleteEmptyKeys } from "src/utils/function";
import { useDispatch } from "react-redux";

import { userServices } from "src/services";

// Components
import { LoadingIndicator } from "src/components";
const AccountTable = React.lazy(() => import("../AccountTable"));
const AccountTableBody = React.lazy(() => import("../UserAccountTableBody"));

/**
 * Agent List page
 */
const AgentListPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [agentAccounts, setAgentAccounts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterErrors, setFilterErrors] = useState({});
  const accountsType = "admin";

  /*
   * Fetch Agent accounts
   */
  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);

    userServices
      .getAllAdmins()
      .then((response) => {
        if (isSubscribed) {
          setLoading(false);
          setAgentAccounts(response);
          setFilteredData(response);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error("Something went wrong. Please try again.");
      });
    setLoading(false);
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

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
          handleFilterChange={() => {}}
          handleFilterSubmit={() => {}}
          handleClearFilter={() => {}}
          accountsType={accountsType}
        >
          <AccountTableBody
            accounts={filteredData}
            accountType={accountsType}
          />
        </AccountTable>
      )}
    </>
  );
};

export default AgentListPage;
