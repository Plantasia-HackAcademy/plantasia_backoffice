import { DashboardTable } from "./DashboardTable";
import { SalesCard } from "./SalesCard";
import "../css/Dashboard.css";
import { Outlet } from "react-router";
import { useLocation } from "react-router";

export const Dashboard = ({ title }) => {
  const location = useLocation();

  return (
    <main className="main-container">
      <h2 className="dashboard__title">{title}</h2>

      {location.pathname === "/dashboard" && (
        <>
          <h3 className="dashboard__past-days">Last 30 days</h3>
          <div className="cards-container">
            <SalesCard />
            <SalesCard />
            <SalesCard />
          </div>
        </>
      )}
      <DashboardTable />
      <Outlet />
    </main>
  );
};
