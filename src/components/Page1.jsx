import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Page1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Page1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check login status
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const loggedParam = urlParams.get("loggedin");

    if (loggedParam === "true") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      const loggedIn = localStorage.getItem("isLoggedIn");
      if (loggedIn === "true") setIsLoggedIn(true);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className={styles.main}>
      {/* ✅ Navbar */}
      <nav className={`d-flex justify-content-between align-items-center ${styles.navbar}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>P</span> FundingPros<sup>®</sup>
        </div>

        {/* Links */}
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/hiii">Terms of Use</Link>
          <Link to="/about">About Us</Link>
          <Link to="/huuu">Affiliate Program</Link>
          <Link to="/iioo">FAQ</Link>
        </div>

        {/* ✅ Buttons */}
        <div className={styles.navButtons}>
          {!isLoggedIn ? (
            <>
              <button
                className={`btn btn-outline-light ${styles.btnSignup}`}
                onClick={() => (window.location.href = "http://localhost:3000/signup")}
              >
                Sign up
              </button>
              <button className={`btn btn-primary ${styles.btnDashboard}`}>Dashboard</button>
            </>
          ) : (
            <button className="btn btn-danger px-4 py-2" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Built by traders <br /> <span className={styles.arrow}>➜</span> for traders.
        </h1>
        <p className={styles.heroSubtitle}>
          Join over 1,000 traders in the world's leading firm. Trade in a fully simulated
          environment and earn up to 100% rewards.
        </p>

        <div className={styles.heroButtons}>
          {!isLoggedIn ? (
            <>
              <button
                className="btn btn-primary px-4 py-2"
                onClick={() => (window.location.href = "http://localhost:3000/signup")}
              >
                Buy Challenge
              </button>
              <button className="btn btn-outline-light px-4 py-2">Join Competition</button>
            </>
          ) : (
            <button
              className={`${styles.bigBuyButton} btn btn-success px-5 py-3 mt-3`}
              onClick={() => navigate("/iioo")}
            >
              🚀 Buy Funding Account
            </button>
          )}
        </div>
      </div>

      {/* ✅ Tagline Section */}
      <div className={styles.taglineSection}>
        <h2 className={styles.yupsLarge}>Our capital. Your skills.</h2>
        <p className={styles.yupsTagline}>
          You will get your refund only after passing the test, and then you’ll receive a real capital-funded account.
        </p>
      </div>
    </div>
  );
};

export default Page1;
