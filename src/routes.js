import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Accounts related pages
const AgentAddPage = React.lazy(() =>
  import("./views/accounts/agent/AgentAddPage")
);

// Chat related pages
const ChatPool = React.lazy(() => import("./views/chat/ChatPool"));
const Chat = React.lazy(() => import("./views/chat/Chat"));

const routes = [
  {
    path: "/law-admin",
    exact: true,
    name: "Admin Panel",
    component: Dashboard,
  },
  // Admin related pages
  {
    path: "/law-admin/agent",
    name: "Agent",
    exact: true,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/add",
    name: "Add Agent",
    component: AgentAddPage,
    isLoggedIn: false,
    accountType: ["admin"],
  },
  // Question related pages
  {
    path: "/law-admin/question",
    name: "Questions",
    exact: true,
    isLoggedIn: false,
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
];

export default routes;
