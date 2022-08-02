import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilGroup,
  cilChatBubble,
  cilAddressBook,
  cilUserPlus,
  cilList,
  cilLibraryAdd,
  cilUserFollow,
  cilPlus,
  cilSearch
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  // Admins
  {
    component: CNavTitle,
    name: "Agents",
    accountType: ["admin"],
  },
  {
    component: CNavItem,
    name: "Add Agent",
    to: "/law-admin/agent/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    accountType: ["admin"],
  },
  // {
  //   component: CNavItem,
  //   name: "Admins",
  //   to: "/admin/agent/view-all",
  //   icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  //   accountType: ["admin"],
  // },
];

export default _nav;
