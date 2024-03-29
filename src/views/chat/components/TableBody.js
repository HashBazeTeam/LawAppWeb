import React from "react";
import { useHistory } from "react-router-dom";
import { t } from "i18next";

import {
  CButton,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CBadge,
} from "@coreui/react";

import { convertTZ } from "src/utils";

/**
 * Table body for question pool
 */
const TableBody = ({ questions }) => {
  const history = useHistory();

  // TODO: Implement a method to give different colors to different status
  return (
    <>
      <CTableBody>
        {questions.map((question, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{question.topic}</CTableDataCell>
            <CTableDataCell>{convertTZ(question.postDateTime)}</CTableDataCell>
            <CTableDataCell>{question.clientName}</CTableDataCell>
            <CTableDataCell>{question.country}</CTableDataCell>
            <CTableDataCell>
              <CBadge color={"success"}>{question.status}</CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color={"danger"}>{!question.isReadAdmin && "*"}</CBadge>
            </CTableDataCell>

            <CTableDataCell>
              <CButton
                color="info"
                variant="outline"
                onClick={() =>
                  history.push({
                    pathname: `/law-admin/question/chat`,
                    state: { question: question },
                  })
                }
              >
                <span className="text-sm"> {t("view")}</span>
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default TableBody;
