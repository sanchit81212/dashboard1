import React from "react";
import styles from "./Huuu.module.css";
import { Clock, Zap } from "lucide-react";

const Huuu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glowCircle}></div>
      <div className={styles.contentBox}>
        <div className={styles.iconBox}>
          <Clock className={styles.icon} />
          <Zap className={styles.iconSmall} />
        </div>

        <h1 className={styles.title}>Affiliate Program</h1>
        <p className={styles.subtitle}>
          We're building something exciting!  
          Soon you'll be able to earn commissions by sharing FundingPips with other traders.
        </p>

        <div className={styles.comingSoonBox}>
          <h2 className={styles.soonText}>🚀 Coming Soon...</h2>
          <p className={styles.info}>
            Stay tuned for updates. Your next big opportunity is just around the corner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Huuu;
