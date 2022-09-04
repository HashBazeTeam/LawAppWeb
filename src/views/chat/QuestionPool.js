import React, { useEffect, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { LoadingIndicator } from "src/components";
import { deleteEmptyKeys } from "src/utils/function";
import { questionServices } from "src/services";

const Table = React.lazy(() => import("./components/Table"));
const TableBody = React.lazy(() => import("./components/TableBody"));

/**
 * Chat Pool section to display all the questions with title and date.
 * TODO: Add a cloud function to update stat of question counts
 */
export default function QuestionPool(props) {
  const { t } = useTranslation();

  const recordsPerPage = 50; // Records per page
  const [questionList, setQuestionList] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null); //  Last visible document in firestore
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(filterInitialState);
  const [filterErrors, setFilterErrors] = useState({});

  /*
   * Fetch questions
   */
  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    fetchData().catch((err) => {
      console.log(err);
      setLoading(false);
    });
    setLoading(false);
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  // Fetch data on page change
  // move :- next or previous
  // Firestore doesn't provide a way to get the previous page, so we have to use the lastVisibleDoc
  const fetchData = async (move) => {
    setLoading(true);
    const { questions, totalCount, lastVisible } =
      await questionServices.getAllQuestions(
        filters.status,
        recordsPerPage,
        lastVisibleDoc,
        move
      );
    setQuestionList(questions);
    setFilteredData(questions);
    setLastVisibleDoc(lastVisible);
    setMaxPages(Math.ceil(totalCount / recordsPerPage));
    setLoading(false);
  };

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
    const filteredAccounts = questionList.filter((account) => {
      for (let key in filterItems) {
        if (filterItems[key] != account[key]) return false;
      }
      return true;
    });
    setFilteredData(filteredAccounts);
  };

  const handleClearFilter = () => {
    setFilters(filterInitialState);
    setFilteredData(questionList);
  };

  const tableHeaderCells = [
    t("topic"),
    t("date"),
    t("country"),
    t("status"),
    "",
  ];

  /**
   * Pagination related methods
   */
  const handlePageChangePrevious = () => {
    pageNumber == 1 ? 1 : setPageNumber(pageNumber - 1);
    fetchData("previous");
  };
  const handlePageChangeNext = () => {
    pageNumber == maxPages ? maxPages : setPageNumber(pageNumber + 1);
    fetchData("next");
  };

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
          handlePageChangePrevious={handlePageChangePrevious}
          handlePageChangeNext={handlePageChangeNext}
        >
          <TableBody questions={filteredData} />
        </Table>
      )}
    </>
  );
}

const filterInitialState = {
  status: "",
};
