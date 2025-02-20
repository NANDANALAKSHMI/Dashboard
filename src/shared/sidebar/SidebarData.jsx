const dummyMenuItems = [
    {
      name: "dashboard",
      displayName: "Dashboard",
      route: "/dashboard",
      icon: "dashboardIcon",
    },
    {
      name: "users",
      displayName: "Users",
      route: "/users",
      icon: "usersIcon",
      subItems: [
        { name: "allUsers", displayName: "All Users", route: "/users/all" },
        { name: "addUser", displayName: "Add User", route: "/users/add" },
      ],
    },
    {
      name: "settings",
      displayName: "Settings",
      route: "/settings",
      icon: "settingsIcon",
    },
    {
      name: "reports",
      displayName: "Reports",
      route: "/reports",
      icon: "reportsIcon",
      subItems: [
        { name: "monthlyReport", displayName: "Monthly Report", route: "/reports/monthly" },
        { name: "yearlyReport", displayName: "Yearly Report", route: "/reports/yearly" },
      ],
    },
    {
      name: "logout",
      displayName: "Logout",
      route: "/login",
      icon: "logoutIcon",
    },
  ];
  
  export default dummyMenuItems;
  