import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ChatList } from "react-chat-elements";

import { avatarURL } from "src/configs/constants";
import { LoadingIndicator } from "src/components";
import { thunks } from "src/store";
import { auth } from "src/services/firebase";
import { convertTZ } from "src/utils/function";

const Table = React.lazy(() => import("./components/Table"));
const TableBody = React.lazy(() => import("./components/TableBody"));

/**
 *
 * @returns Chat Pool section to display all the questions with title and date.
 */
export default function ChatPool(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const recordsPerPage = 10;
  const [chatList, setChatList] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  /*
   * Fetch questions
   */
  useEffect(() => {
    let isSubscribed = true;

    setLoading(true);
    const fetchData = async () => {};
    fetchData().catch((err) => console.log(err));
    setLoading(false);
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  /**
   * Handle Filter Change
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
    setFilteredData(filteredAccounts);
  };

  const handleClearFilter = () => {
    setFilters({ branchName: "", status: "", accountType: "" });
    setFilteredData(bsAccounts);
  };

  const tableHeaderCells = ["Topic", "Date", "Country", "Status", ""];

  return (
    <>
      {loading ? (
        <div className="flex justify-center"> {LoadingIndicator("lg")} </div>
      ) : (
        <Table
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
        >
          <TableBody questions={filteredData} />
        </Table>
      )}
    </>
  );
}

const sampleData = [
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: `Real estate urgent case 1 - Yet to be picked`,
    subtitle: "Tharindu Maduranga, Canada",
    date: new Date(),
    unread: 1,
    key: "1",
    id: "12342",
    dateString: convertTZ(new Date()),
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 2 - Yet to be picked",
    subtitle: "Tharindu Maduranga, Austraila",
    unread: 3,
    key: "2",
    id: "234234322",
    dateString: convertTZ(new Date()),
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 3 - Yet to be picked",
    subtitle: "Tharindu Maduranga, Canada",
    dateString: convertTZ(new Date()),
    unread: 3,
    key: "3",
    id: "3354324534",
    className: "py-1",
  },
  {
    avatar: avatarURL,
    alt: "kursat_avatar",
    title: "Real estate urgent case 4 - Ongoing",
    subtitle: "Tharindu Maduranga, Canada",
    dateString: convertTZ(new Date()),
    unread: 3,
    key: "4",
    id: "43543245",
    className: "py-1",
  },
];
