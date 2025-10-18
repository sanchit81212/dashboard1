import React from "react";
import styles from "./Footer.module.css";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gradientLine}></div>

      <div className={styles.topSection}>
        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Terms of Use</li>
              <li>Contact Us</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Brand Kit</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul>
              <li><FaEnvelope /> Fundingpros21@gmail.com</li>
              <li><FaMapMarkerAlt /> Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className={styles.isoSection}>
          <div className={styles.isoCard}>
            <h3>ISO 27001:2022</h3>
            <p>Information Security Management System - ISMS</p>
          </div>
          <div className={styles.isoCard}>
            <h3>ISO 22301:2019</h3>
            <p>Business Continuity Management Systems - BCMS</p>
          </div>
          <div className={styles.isoCard}>
            <h3>ISO 9001:2015</h3>
            <p>Quality Management System - QMS</p>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <h2 className={styles.brand}>YourBrand™</h2>
        <div className={styles.icons}>
          <FaDiscord />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
          <FaEnvelope />
        </div>
        <p className={styles.rating}>⭐ 4.8/5 on Google | Trusted by 10k+ users</p>
      </div>

      <div className={styles.disclaimer}>
        <h4>IMPORTANT INFORMATION & DISCLAIMER</h4>
        <p>
          All accounts provided are demo accounts for educational purposes only.
          No real trading or investment services are provided. This is a simulated
          trading environment and all data is for evaluation only.
        </p>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} YourBrand™ | All rights reserved.</p>
      </div>
    </footer>
  );
}
