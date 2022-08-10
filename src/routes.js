import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));


// Accounts related pages
const AgentAddPage = React.lazy(() =>
  import("./views/accounts/agent/AgentAddPage")
);
const ChatPool = React.lazy(() =>
import("./views/accounts/agent/AgentAddPage")
);

const routes = [
  { path: "/law-admin", exact: true, name: "Admin Panel", component: Dashboard },
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
  {
    path: "/law-admin/chat/pool",
    name: "Chat Pool",
    component: ChatPool,
    isLoggedIn: false,
    accountType: ["admin"],
  },
];

export default routes;
