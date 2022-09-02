import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CButton,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CBadge,
} from "@coreui/react";

/**
 * User account table body component
 * This component is common for all user accounts
 */
const UserAccountTableBody = ({ accounts }) => {
  const history = useHistory();

  return (
    <>
      <CTableBody>
        {accounts.map((account, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{account.fullName}</CTableDataCell>
            <CTableDataCell>{account.country}</CTableDataCell>
            <CTableDataCell>{account.email}</CTableDataCell>
            <CTableDataCell>{account.phoneNumber}</CTableDataCell>
            <CTableDataCell>
              <CBadge
                color={account.status == "Active" ? "success" : "warning"}
              >
                {account.status}
              </CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                variant="outline"
                onClick={() =>
                  history.push({
                    pathname: `/law-admin/${account.accountType[1]}/account`,
                    state: { userId: account.userId },
                  })
                }
              >
                <span className="text-sm"> View</span>
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default UserAccountTableBody;
