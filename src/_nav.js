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
  cilSearch,
  cilUserX,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "User Accounts",
  },
  {
    component: CNavGroup,
    name: "Admin Accounts",
    to: "/law-admin/admin",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: "Add Admin",
      //   to: "/law-admin/admin/add",
      // },
      // {
      //   component: CNavItem,
      //   name: "Admin List",
      //   to: "/law-admin/admin/all",
      // },
    ],
  },
  {
    component: CNavGroup,
    name: "Agent Accounts",
    to: "/law-admin/agent",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Add Agent",
        to: "/law-admin/agent/add",
      },
      {
        component: CNavItem,
        name: "Agent List",
        to: "/law-admin/agent/all",
      },
    ],
  },
  // Chat
  {
    component: CNavTitle,
    name: "Question",
  },
  {
    component: CNavItem,
    name: "Question Pool",
    to: "/law-admin/question/pool",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
];

export default _nav;
