import React from "react";
import styles from "./Hiii.module.css";

const Hiii = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>📜 Terms of Use</h1>
        <p className={styles.subtitle}>
          Please read these Terms carefully before using FundingPros.  
          By accessing or using our services, you agree to comply with all terms and conditions.
        </p>
      </div>

      <div className={styles.sections}>
        <div className={styles.card}>
          <h2>🔹 Introduction</h2>
          <p>
            Welcome to FundingPros! These Terms of Use govern your access and use of our platform, 
            including related services, trading simulations, and user interfaces. 
            By using our services, you acknowledge and accept these terms.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Eligibility</h2>
          <p>
            You must be at least 13 years old to use our services. By creating an account, 
            you represent that you have the legal authority to agree to these terms.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and ensuring 
            all provided information is accurate and up to date. Misuse or fraudulent activity 
            may lead to suspension or permanent ban.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Payments & Refunds</h2>
          <p>
            All payments are securely processed via trusted partners. Once a plan is activated, 
            refunds are not applicable. For disputes, contact our support team within 24 hours of payment.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Intellectual Property</h2>
          <p>
            All content, logos, graphics, and interfaces are the property of FundingPips. 
            Any unauthorized use or reproduction is strictly prohibited.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Limitation of Liability</h2>
          <p>
            FundingPips is not responsible for any losses or damages resulting from use of our services. 
            All trading activities involve risk, and users participate at their own discretion.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Privacy & Data</h2>
          <p>
            We prioritize your data security. Any information shared with us is protected and used 
            solely for service improvement and verification purposes.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time if violations 
            of these terms are detected. All decisions are final and non-negotiable.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🔹 Contact Us</h2>
          <p>
            Have questions or need support? Reach out to our team anytime at  
            <a href="mailto:fundingpros21@gmail.com"> fundingpros21@gmail.com</a>.  
            We typically respond within 1 hour.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 FundingPips — Empowering Smart Traders 🚀
      </footer>
    </div>
  );
};

export default Hiii;
