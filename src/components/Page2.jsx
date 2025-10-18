import React, { useState } from "react";
import styles from "./Page2.module.css";
import { Hand, ThumbsUp, Trophy, DollarSign } from "lucide-react";

const planData = {
  "15K INR": {
    title: "15K INR Plan",
    desc: "Perfect for new traders — low risk, high learning curve. Test your strategy with minimal exposure.",
    target: "₹1,800 (12%)",
    loss: "12%",
    dailyLoss: "3%",
    split: "75%",
    duration: "7 Days",
    withdraw: "Weekly",
    price: "₹300",
    explain: `In this plan, you start with ₹15,000 virtual balance. 
Your goal is to achieve a ₹1,800 profit (12%) while ensuring that your total loss does not exceed 12%.
Your daily loss limit is capped at 3%. 
Once you maintain discipline and hit the target within 7 trading days, you qualify for your payout and unlock your real funded account.`,
  },
  "50K INR": {
    title: "50K INR Plan",
    desc: "Best-selling plan for intermediate traders — strike the balance between risk and reward.",
    target: "₹6,000 (12%)",
    loss: "12%",
    dailyLoss: "3%",
    split: "80%",
    duration: "7 Days",
    withdraw: "Weekly / Bi-Weekly",
    price: "₹700",
    explain: `You’ll trade with ₹50,000 simulated capital. 
To pass, make a total profit of ₹6,000 (12%) while staying below a maximum drawdown of 12%.
Your daily loss cannot exceed 3%. 
Stay consistent for at least 7 trading days to unlock your real funded account and rewards.`,
  },
  "1 Lakh INR": {
    title: "1 Lakh INR Plan",
    desc: "A solid step-up for consistent traders. Double your rewards, double your confidence.",
    target: "₹12,000 (12%)",
    loss: "12%",
    dailyLoss: "3%",
    split: "85%",
    duration: "7 Days",
    withdraw: "Weekly / Bi-Weekly",
    price: "₹1,400",
    explain: `This plan gives you ₹1,00,000 in simulated funds. 
Your challenge: earn ₹12,000 profit (12%) without crossing a 12% overall loss limit. 
Your daily loss should remain under 3%. 
Maintain proper risk management for 7 trading days to unlock your real funded account and rewards.`,
  },
  "3 Lakh INR": {
    title: "3 Lakh INR Plan",
    desc: "Professional-grade plan for serious traders with proven consistency and discipline.",
    target: "₹36,000 (12%)",
    loss: "12%",
    dailyLoss: "3%",
    split: "90%",
    duration: "7 Days",
    withdraw: "Bi-Weekly",
    price: "₹2,500",
    explain: `Start with ₹3,00,000 simulated capital and aim for ₹36,000 profit (12%). 
Your total drawdown cannot exceed 12% and daily losses must stay below 3%.
Keep your strategy consistent for at least 7 days to unlock your real funded account and rewards.`,
  },
  "5 Lakh INR": {
    title: "5 Lakh INR Plan",
    desc: "Top-tier plan for elite traders aiming for bigger capital and larger profits.",
    target: "₹60,000 (12%)",
    loss: "12%",
    dailyLoss: "2.5%",
    split: "90%",
    duration: "7 Days",
    withdraw: "Bi-Weekly / Monthly",
    price: "₹3,500",
    explain: `With ₹5,00,000 in trading capital, your profit goal is ₹60,000 (12%). 
Your total loss should not cross 12%, and daily loss is capped at 2.5%. 
Trade responsibly for a minimum of 7 days to unlock your real funded account and rewards.`,
  },
};

const Page2 = () => {
  const [activePlan, setActivePlan] = useState("50K INR");
  const plan = planData[activePlan];

  return (
    <div className={styles.section}>
      {/* WHY FUNDINGPRO SECTION */}
      <div className={styles.whySection}>
        <h2 className={styles.whyHeading}>Why FundingPro?</h2>
        <div className={styles.whyBoxes}>
          <div className={styles.whyBox}>
            <Hand size={36} color="#7a5af5" />
            <h3>Zero Reward Denials</h3>
            <p>Trade with peace of mind — we guarantee fair and transparent payouts.</p>
          </div>

          <div className={styles.whyBox}>
            <ThumbsUp size={36} color="#7a5af5" />
            <h3>Built for Intraday & Swing Traders</h3>
            <p>Designed for speed and precision — trade NIFTY & BANKNIFTY with no delays.</p>
          </div>

          <div className={styles.whyBox}>
            <Trophy size={36} color="#7a5af5" />
            <h3>Flexible Reward Cycles</h3>
            <p>Weekly, bi-weekly, monthly, or on-demand withdrawals — your choice.</p>
          </div>

          <div className={styles.whyBox}>
            <DollarSign size={36} color="#7a5af5" />
            <h3>We Grow Together</h3>
            <p>Scale up your capital — trade up to ₹25,00,000 in simulated funds.</p>
          </div>
        </div>
      </div>

      {/* PLANS SECTION */}
      <div className={styles.planSection}>
        <div className={styles.tabBar}>
          {Object.keys(planData).map((planName) => (
            <button
              key={planName}
              className={`${styles.tab} ${
                activePlan === planName ? styles.active : ""
              }`}
              onClick={() => setActivePlan(planName)}
            >
              {planName}
            </button>
          ))}
        </div>

        <div className={`${styles.cardBox} ${styles.fadeIn}`}>
          <div className={styles.cardLeft}>
            <h3>{plan.title}</h3>
            <p>(Customized Trading Challenge)</p>

            <div className={styles.badges}>
              <div className={styles.badgeActive}>💰 Weekly Payouts</div>
              <div className={styles.badge}>⚡ Instant Withdrawals</div>
            </div>

            <p className={styles.desc}>{plan.desc}</p>

            <div className={styles.explainer}>
              <p>{plan.explain}</p>
            </div>

            <div className={styles.unlockBox}>
              <p>🔓 Unlock your <b>real capital account</b> after passing the evaluation.</p>
              <p>💸 Pass the challenge and get your <b>entire fee refunded</b> instantly.</p>
            </div>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.row}>
              <span>Profit Target</span>
              <span>{plan.target}</span>
            </div>
            <div className={styles.row}>
              <span>Max Loss</span>
              <span>{plan.loss}</span>
            </div>
            <div className={styles.row}>
              <span>Max Daily Loss</span>
              <span>{plan.dailyLoss}</span>
            </div>
            <div className={styles.row}>
              <span>Profit Split</span>
              <span>{plan.split}</span>
            </div>
            <div className={styles.row}>
              <span>Minimum Trade Days</span>
              <span>{plan.duration}</span>
            </div>
            <div className={styles.row}>
              <span>Withdrawal Cycle</span>
              <span>{plan.withdraw}</span>
            </div>

            <div className={styles.priceBox}>
              <h4>Account Size: {plan.title}</h4>
              <h3>{plan.price}</h3>
              {/* 🟢 Button removed here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
