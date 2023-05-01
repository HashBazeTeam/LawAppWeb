import React from "react";
import i18next from "./i18n";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Profile page
const ProfilePage = React.lazy(() => import("./views/profile/ProfilePage"));

// Agent Accounts related pages
const AgentAddPage = React.lazy(() =>
  import("./views/accounts/agent/AccountAddPage")
);
const AgentListPage = React.lazy(() =>
  import("./views/accounts/agent/AccountListPage")
);
const AgentAccountPage = React.lazy(() =>
  import("./views/accounts/agent/AccountPage")
);

// Admin Accounts related pages
const AdminAddPage = React.lazy(() =>
  import("./views/accounts/admin/AccountAddPage")
);
const AdminListPage = React.lazy(() =>
  import("./views/accounts/admin/AccountListPage")
);
const AdminAccountPage = React.lazy(() =>
  import("./views/accounts/admin/AccountPage")
);

// Chat related pages
const ChatPool = React.lazy(() => import("./views/chat/QuestionPool"));
const Chat = React.lazy(() => import("./views/chat/Chat"));

// Analytics related pages
const CustomerInsight = React.lazy(() => import("./views/analytics/CustomerInsight"));

// Configuration related pages
const BasicConfigPage = React.lazy(() => import('./views/configuration/basic'));

const routes = [
  {
    path: "/law-admin",
    exact: true,
    name: i18next.t("admin_panel"),
    component: Dashboard,
  },
  // Admin related pages
  {
    path: "/law-admin/admin",
    name: i18next.t("admin"),
    exact: true,
    isLoggedIn: false,
    accountType: ["admin"],
    component: AdminListPage,
  },
  {
    path: "/law-admin/admin/add",
    name: i18next.t("add_admin"),
    component: AdminAddPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/admin/all",
    name: i18next.t("admin_list"),
    component: AdminListPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/admin/account",
    name: i18next.t("admin_account"),
    component: AdminAccountPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Agent related pages
  {
    path: "/law-admin/agent",
    name: i18next.t("agent"),
    exact: true,
    isLoggedIn: false,
    accountType: ["admin"],
    component: AgentListPage,
  },
  {
    path: "/law-admin/agent/add",
    name: i18next.t("add_agent"),
    component: AgentAddPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/all",
    name: i18next.t("agent_list"),
    component: AgentListPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/account",
    name: i18next.t("agent_account"),
    component: AgentAccountPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Question related pages
  {
    path: "/law-admin/question",
    name: i18next.t("questions"),
    exact: true,
    isLoggedIn: false,
    component: ChatPool,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/question/pool",
    name: i18next.t("question_pool"),
    component: ChatPool,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/question/chat",
    name: i18next.t("question"),
    component: Chat,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Analytics related pages
  {
    path: "/law-admin/analytics",
    name: i18next.t("analytics"),
    exact: true,
    isLoggedIn: false,
    component: CustomerInsight,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/analytics/customer-insight",
    name: i18next.t("customer_insight"),
    component: CustomerInsight,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/config",
    name: i18next.t("configuration"),
    component: BasicConfigPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/config/basic",
    name: i18next.t("basic_configuration"),
    component: BasicConfigPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/profile",
    name: i18next.t("profile"),
    component: ProfilePage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/change-password",
    name: i18next.t("change_password"),
    component: ProfilePage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
];

export default routes;
