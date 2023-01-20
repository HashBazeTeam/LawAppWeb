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
  cilSettings,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
import i18n from "i18next";

const _nav = [
  {
    component: CNavTitle,
    name: i18n.t("user_accounts"),
  },
  {
    component: CNavGroup,
    name: i18n.t("admin_accounts"),
    to: "/law-admin/admin",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t("add_admin"),
        to: "/law-admin/admin/add",
      },
      {
        component: CNavItem,
        name: i18n.t("admin_list"),
        to: "/law-admin/admin/all",
      },
    ],
  },
  {
    component: CNavGroup,
    name: i18n.t("agent_accounts"),
    to: "/law-admin/agent",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t("add_agent"),
        to: "/law-admin/agent/add",
      },
      {
        component: CNavItem,
        name: i18n.t("agent_list"),
        to: "/law-admin/agent/all",
      },
    ],
  },
  // Chat
  {
    component: CNavTitle,
    name: i18n.t("question"),
  },
  {
    component: CNavItem,
    name: i18n.t("question_pool"),
    to: "/law-admin/question/pool",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: i18n.t("analytics"),
  },
  {
    component: CNavGroup,
    name: i18n.t("analytics"),
    to: "/law-admin/analytics",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t("customer_insight"),
        to: "/law-admin/analytics/customer-insight",
      },
    ],
  },
  {
    component: CNavTitle,
    name: i18n.t("configuration"),
  },
  {
    component: CNavGroup,
    name: i18n.t("configuration"),
    to: "/law-admin/config",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t("basic_configuration"),
        to: "/law-admin/config/basic",
      },
    ],
  },
];

export default _nav;
