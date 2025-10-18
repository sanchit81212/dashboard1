import React from "react";
import styles from "./Page3.module.css";
import globe from "../assets/earth.png";

const traders = [
  { name: "Ananya Patel", amount: "₹9,40,000" },
  { name: "Arjun Mehta", amount: "₹12,60,000" },
  { name: "Riya Kapoor", amount: "₹8,90,000" },
  { name: "Vikram Rao", amount: "₹14,25,000" },
  { name: "Siddharth Nair", amount: "₹10,80,000" },
  { name: "Tanya Sharma", amount: "₹11,20,000" },
  { name: "Rohan Gupta", amount: "₹15,60,000" },
  { name: "Ishita Verma", amount: "₹13,90,000" },
  { name: "Karan Malhotra", amount: "₹16,75,000" },
  { name: "Neha Joshi", amount: "₹10,10,000" },
];

const Page3 = () => {
  return (
    <div className={styles.pageContainer}>
      {/* 🌍 Earth + Text Section */}
      <div className={styles.topSection}>
        <img src={globe} alt="Rotating Earth" className={styles.globe} />

        <div className={styles.textSection}>
          <h1>10Cr+ Funded Accounts 🚀</h1>
          <p>
            We fund your trading journey — <b>you bring the skill, we bring the
            capital.</b> With over <b>₹10 Crore+ funded accounts</b>, we’ve
            helped thousands of traders turn potential into profit.
          </p>
          <p>
            Our platform gives you up to <b>90% profit share</b> and connects you
            with advanced analytics, world-class support, and a thriving trader
            community. Whether you’re a scalper, swing trader, or algorithmic
            expert — your success story starts here.
          </p>
          <p>
            <b>Trade with trust.</b> Every funded account represents skill,
            consistency, and discipline. Join India’s fastest-growing trader
            network and take your trading career global 🌍.
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.startButton}>Start Trading</button>
            <button className={styles.learnButton}>Learn More</button>
          </div>
        </div>
      </div>

      {/* 💸 Scrolling Earners */}
      <div className={styles.scrollingWrapper}>
        <div className={styles.scrollingContent}>
          {traders.map((t, index) => (
            <div key={index} className={styles.traderBox}>
              <span className={styles.traderName}>{t.name}</span>{" "}
              <span className={styles.traderAmount}>earned {t.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
