import "../css/SalesCard.css";

export const SalesCard = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__top-section">
        <img className="dashboard-card__img" src="/images/shopping-bag.png" alt="" />
        <div className="dashboard-card__data-wrapper">
          <p className="dashboard-card__sales-type">Montly Sales (USD)</p>
          <p className="dashboard-card__money-amount">450.980%</p>{" "}
          <span className="dashboard-card__money-percentage">&#129129; 12%</span>
        </div>
      </div>

      <div className="dashboard-card__bottom-section">
        <a className="dashboard-card__view-link" href="#">
          View all
        </a>
      </div>
    </div>
  );
};
