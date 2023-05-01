import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import store, { accessToken } from "src/store";
import { toast } from "react-toastify";
import { deleteEmptyKeys } from "src/utils/function";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
    const fetchData = async () => {
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
    };
    fetchData();
    setLoading(false);
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  // Handle pagination
  const maxPages = 1;
  const [pageNumber, setPageNumber] = useState(1);

  const tableHeaderCells = [
    t("full_name"),
    t("country"),
    t("email"),
    t("phone_number"),
  ]

  return (
    <>
      {loading ? (
        <div className="flex justify-center bg-slate-50"> {LoadingIndicator("lg")} </div>
      ) : (
        <div className="mt-8 px-0">
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
        </div>
      )}
    </>
  );
};

export default AgentListPage;
