import Dashboard from "./views/Dashboard.jsx";
import Loans from "./views/Loans.jsx";
import Payments from "./views/Payments.jsx";
import Borrowers from "./views/Borrowers.jsx";
import Employees from "./views/Employees.jsx";
//import Employees from "./views/old/User.jsx";

//import Icons from "./views/old/Icons.jsx";
//import Notifications from "./views/Notifications.jsx";
//import Typography from "./views/Typography.jsx";
//import TableList from "./views/Tables.jsx";
//import Maps from "./views/Map.jsx";
//import UserPage from "./views/User.jsx";
//import UpgradeToPro from "./views/Upgrade.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/borrowers",
    name: "Borrowers",
    icon: "nc-icon nc-badge",
    component: Borrowers,
    layout: "/admin"
  },{
    path: "/loans",
    name: "Loans",
    icon: "nc-icon nc-briefcase-24",
    component: Loans,
    layout: "/admin"
  },
  //{
    //path: "/wallet",
    //name: "My Wallet",
    //icon: "nc-icon nc-money-coins",
    //component: Wallet,
    //layout: "/admin"
  //},
  {
    path: "/payments",
    name: "Payments",
    icon: "nc-icon nc-book-bookmark",
    component: Payments,
    layout: "/admin"
  },
  //{
    //path: "/icons",
    //name: "Icon",
    //icon: "nc-icon nc-money-coins",
    //component: Icons,
    //layout: "/admin"
  //},
  {
    pro: true,
    path: "/employees",
    name: "Employees",
    icon: "nc-icon nc-single-02",
    component: Employees,
    layout: "/admin"
  }
];
export default routes;
