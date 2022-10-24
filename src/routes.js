import React from "react";

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
    name: "Admin Panel",
    component: Dashboard,
  },
  // Admin related pages
  {
    path: "/law-admin/admin",
    name: "Admin",
    exact: true,
    isLoggedIn: false,
    accountType: ["admin"],
    component: AdminListPage,
  },
  {
    path: "/law-admin/admin/add",
    name: "Add Admin",
    component: AdminAddPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/admin/all",
    name: "Admin List",
    component: AdminListPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/admin/account",
    name: "Admin Account",
    component: AdminAccountPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Agent related pages
  {
    path: "/law-admin/agent",
    name: "Agent",
    exact: true,
    isLoggedIn: false,
    accountType: ["admin"],
    component: AgentListPage,
  },
  {
    path: "/law-admin/agent/add",
    name: "Add Agent",
    component: AgentAddPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/all",
    name: "Agent List",
    component: AgentListPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/account",
    name: "Agent Account",
    component: AgentAccountPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Question related pages
  {
    path: "/law-admin/question",
    name: "Questions",
    exact: true,
    isLoggedIn: false,
    component: ChatPool,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/question/pool",
    name: "Question Pool",
    component: ChatPool,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/question/chat",
    name: "Question",
    component: Chat,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Analytics related pages
  {
    path: "/law-admin/analytics",
    name: "Analytics",
    exact: true,
    isLoggedIn: false,
    component: CustomerInsight,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/analytics/customer-insight",
    name: "Customer Insight",
    component: CustomerInsight,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/config",
    name: "Configuration",
    component: BasicConfigPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/config/basic",
    name: "Basic Configuration",
    component: BasicConfigPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/profile",
    name: "Profile",
    component: ProfilePage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/change-password",
    name: "Change Password",
    component: ProfilePage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
];

export default routes;
