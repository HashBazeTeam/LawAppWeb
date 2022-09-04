import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next';

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
const UserAccountTableBody = ({ accounts, accountType }) => {
  const history = useHistory();
  const { t } = useTranslation();

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
                    pathname: `/law-admin/${accountType}/account`,
                    state: { userID: account.userID },
                  })
                }
              >
                <span className="text-sm"> {t('view')}</span>
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default UserAccountTableBody;
