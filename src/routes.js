import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));


// Accounts related pages
const AgentAddPage = React.lazy(() =>
  import("./views/accounts/agent/AgentAddPage")
);

const routes = [
  { path: "/law-admin", exact: true, name: "Admin Panel", component: Dashboard },
  // Admin related pages
  {
    path: "/law-admin/agent",
    name: "Agent",
    exact: true,
    isLoggedIn: true,
    accountType: ["admin"],
  },
  {
    path: "/law-admin/agent/add",
    name: "Admins",
    component: AgentAddPage,
    isLoggedIn: true,
    accountType: ["admin"],
  },
];

export default routes;
