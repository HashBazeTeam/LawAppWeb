import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { LoadingIndicator } from "src/components";
import { deleteEmptyKeys } from "src/utils/function";
import { questionServices } from "src/services";
import { QuestionStatus } from "src/models/types";
import { convertFirestoreTimeStampToDate } from "src/services/firebase";
import { useDispatch } from "react-redux";
import { thunks, selectors } from "src/store";

const Table = React.lazy(() => import("./components/Table"));
const TableBody = React.lazy(() => import("./components/TableBody"));

/**
 * Chat Pool section to display all the questions with title and date.
 * TODO: Add a cloud function to update stat of question counts
 */
export default function QuestionPool(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const client = props.location.state?.client; // Get the question from the previous page
  const configs = useSelector(selectors.user.selectConfigs);

  const recordsPerPage = 20; // Records per page
  const [questionList, setQuestionList] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null); //  Last visible document in firestore
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(filterInitialState);
  const [filterErrors, setFilterErrors] = useState({});
  const [filterCountries, setFilterCountries] = useState([]);
  const [updated, setUpdated] = useState(false);

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
    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  /*
   * Fetch questions when client is changed
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
  }, [client]);

  // Fetch all the configs and set the redux state
  useEffect(() => {
    let isSubscribed = true;
    const fetchConfigs = async () => {
      await dispatch(thunks.user.getConfigs());
    };
    fetchConfigs().catch((err) => {
      console.log(err);
    });
    return () => {
      isSubscribed = false;
    };
  }, []);

  // Fetch data on page change
  // move :- next or previous
  // Firestore doesn't provide a way to get the previous page, so we have to use the lastVisibleDoc
  const fetchData = async (move) => {
    setLoading(true);
    try {
      let _questions;
      let _totalCount;
      let _lastVisible;

      if (client && client.clientID != null) {
        // Get questions by clientID
        const { questions, totalCount, lastVisible } =
          await questionServices.getClientQuestion(
            client.clientID,
            recordsPerPage,
            lastVisibleDoc,
            move
          );
        _questions = questions;
        _totalCount = totalCount;
        _lastVisible = lastVisible;
      } else {
        const { questions, totalCount, lastVisible } =
          await questionServices.getAllQuestions(
            filters.status,
            recordsPerPage,
            lastVisibleDoc,
            move
          );
        _questions = questions;
        _totalCount = totalCount;
        _lastVisible = lastVisible;
      }

      setQuestionList(_questions);
      setFilteredData(_questions);
      setLastVisibleDoc(_lastVisible);
      setMaxPages(Math.ceil(_totalCount / recordsPerPage));
      setLoading(false);
      setUpdated(!updated);
    } catch (error) {
      console.log(error);
      toast.error(t("common_error"));
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const setTimeOut = async () => {
      let _questionList = [...questionList];
      const countrySet = new Set();
      for (let question of _questionList) {
        countrySet.add(question.country);

        if (question.status == QuestionStatus.answered) {
          const answerDateTime = convertFirestoreTimeStampToDate(
            question.answerDateTime
          );
          const currentDate = new Date();
          const diffTime = currentDate - answerDateTime;
          const diffHours = diffTime / (1000 * 3600);

          const compareTime = configs?.expiryTime || 24;
          if (diffHours > compareTime) {
            question.status = QuestionStatus.timeUP;
            await questionServices.updateQuestion(question.questionID, {
              status: QuestionStatus.timeUP,
            });
          }
        }
      }

      // Set value label pair for country
      const countryList = Array.from(countrySet);
      const countryValueLabelPair = countryList.map((country) => {
        return { value: country, label: country };
      });
      setFilterCountries(countryValueLabelPair);
      setQuestionList(_questionList);
    };

    setTimeOut();
  }, [updated]);

  // Reload data
  const reloadData = async () => {
    await fetchData();
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
    if (Object.keys(filterItems).length == 0) {
      setFilteredData(questionList);
      return;
    }
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
    t("client_name"),
    t("country"),
    t("status"),
    "",
    "",
  ];

  /**
   * Pagination related methods.
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
        <div className="flex justify-center bg-slate-50">
          {" "}
          {LoadingIndicator("lg")}{" "}
        </div>
      ) : (
        <div className="mt-8">
          <Table
            accounts={filteredData}
            maxPages={maxPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            tableHeaderCells={tableHeaderCells}
            filters={filters}
            filterErrors={filterErrors}
            filterOptions={{ filterCountries }}
            handleFilterChange={handleFilterChange}
            handleFilterSubmit={handleFilterSubmit}
            handleClearFilter={handleClearFilter}
            handlePageChangePrevious={handlePageChangePrevious}
            handlePageChangeNext={handlePageChangeNext}
            showFilter={client?.clientID != null ? false : true}
            reloadData={reloadData}
          >
            <TableBody questions={filteredData} />
          </Table>
        </div>
      )}
    </>
  );
}

const filterInitialState = {
  status: "",
  country: "",
};
