import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={styles.aboutMain}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1>About FundingPros®</h1>
        <p>
          Built by traders — for traders. We’re on a mission to empower individuals to trade with
          confidence and access capital like never before.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          At FundingPros, we aim to create the most transparent and trader-friendly prop firm
          experience. We help traders scale faster, keep more profits, and trade without the fear
          of losing personal funds.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className={styles.section}>
        <h2>What We Offer</h2>
        <ul>
          <li>💰 Access to funded trading accounts up to 5LAKHS</li>
          <li>📊 Transparent evaluation process and fast payouts</li>
          <li>⚡ Real-time analytics dashboard for performance tracking</li>
          <li>🎯 24/7 trader support and learning resources</li>
        </ul>
      </section>

      {/* Values Section */}
      <section className={styles.section}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Transparency</h3>
            <p>We believe in clear rules, fair payouts, and honest communication with our traders.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>Our tools are designed for modern traders who value speed, accuracy, and simplicity.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Community</h3>
            <p>Join over 1,000 traders growing together, learning, and winning as one family.</p>
          </div>
        </div>
      </section>

      {/* CTA Section — only show if NOT logged in */}
      {!isLoggedIn && (
        <section className={styles.cta}>
          <h2>Start Your Journey Today 🚀</h2>
          <p>Trade smarter, scale faster, and get funded with FundingPips.</p>
          <button
            className={styles.ctaButton}
            onClick={() => (window.location.href = "http://localhost:3000/signup")}
          >
            Join Now
          </button>
        </section>
      )}
    </div>
  );
};

export default About;
