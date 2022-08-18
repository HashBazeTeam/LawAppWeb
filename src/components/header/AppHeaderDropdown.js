import React from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { thunks } from "src/store";

import avatar8 from "./../../assets/images/avatars/avatar.png";
import { useHistory } from "react-router-dom";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const submitLogOut = async () => {
    await dispatch(thunks.user.userLogout());
    history.replace("/login");
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        //!TODO : Profile and Logout Settings
        <CDropdownItem href="/office/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={async () => submitLogOut()}>
          <CIcon icon={cilLockLocked} className="me-2" />
          {t("log_out")}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
