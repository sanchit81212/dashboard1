import React from "react";
import styles from "./iioo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Iioo = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/buy"); // 👈 yahan navigate karega new page pe
  };

  return (
    <div className={styles.dashboard}>
      {/* 🔹 Offer Bar */}
      <div className={styles.offerBar}>
      
      </div>

      <div className={styles.mainContent}>
        {/* 🔹 Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarLogo}>💹</div>
          <div className={styles.sidebarIcons}>
            <i className="bi bi-speedometer2" title="Dashboard"></i>
            <i className="bi bi-cash-coin" title="Funds"></i>
            <i className="bi bi-bar-chart-line" title="Performance"></i>
            <i className="bi bi-trophy" title="Achievements"></i>
            <i className="bi bi-gear" title="Settings"></i>
          </div>
        </aside>

        {/* 🔹 Main Dashboard */}
        <div className={styles.dashboardBody}>
          {/* Header */}
          <div className={styles.dashboardHeader}>
            <h3>Welcome, Trader 🇮🇳</h3>
            <button className={styles.greenButton} onClick={handleBuyClick}>
              🚀 Buy there
            </button>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.purple}`}>
              <h5>Total Balance</h5>
              <p>₹0.00</p>
            </div>
            <div className={styles.statCard}>
              <h5>Behavioral Bias</h5>
              <p>🐂 Bullish</p>
            </div>
            <div className={styles.statCard}>
              <h5>Total Trades</h5>
              <p>0</p>
            </div>
          </div>

          {/* Bronze Card */}
          <div className={styles.bronzeCard}>
            <div>
              <h5>Your Level</h5>
              <h2>Bronze Trader</h2>
              <p>
                Total Reward: <b>₹0.00</b>
              </p>
              <p>Highest Reward: ₹0.00</p>
            </div>
            <div className={styles.badge}>🥉</div>
          </div>

          {/* Bottom Section */}
          <div className={styles.bottomGrid}>
            <div className={styles.bottomCard}>
              <h6>Profitability</h6>
              <div className={styles.progressBar}>
                <div className={styles.progressWin}></div>
              </div>
              <p>Won: 0%</p>
              <p>Lost: 0%</p>
            </div>

            <div className={styles.bottomCard}>
              <h6>Trading Insights</h6>
              <p>📊 Active Markets: 0</p>
              <p>⏰ Avg Trade Duration: 0s</p>
              <p>📈 Avg Win Rate: 0%</p>
            </div>

            <div className={styles.bottomCard}>
              <h6>Performance Summary</h6>
              <p>🏆 Best Day: —</p>
              <p>📉 Worst Day: —</p>
              <p>💼 Profit Factor: 0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iioo;
