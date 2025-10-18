import React, { useState } from "react";
import styles from "./buyPage.module.css";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import emailjs from "emailjs-com";
import Myqr from "../assets/Myqr.png";

const BuyPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [method, setMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    referenceId: "",
    paymentMethod: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const plans = [
    { id: 1, name: "BASIC", price: "₹300", desc: "Perfect for getting started with real trading experience." },
    { id: 2, name: "STANDARD", price: "₹700", desc: "Step up your funding limits and unlock faster payouts." },
    { id: 3, name: "PRO", price: "₹1,400", desc: "Professional tools and access to larger capital funding." },
    { id: 4, name: "ELITE", price: "₹2,500", desc: "Exclusive access to our premium trader network." },
    { id: 5, name: "LEGEND", price: "₹3,500", desc: "Top-tier plan with personalized mentorship & faster scaling." },
  ];

  const upiId = "7206038269@ptsbi";

  const handlePayment = (platform) => {
    setMethod(platform);
    setFormData((prev) => ({ ...prev, paymentMethod: platform }));

    const selectedPlan = plans.find((p) => p.id === selected);
    const amount = selectedPlan ? selectedPlan.price.replace("₹", "") : 0;
    const upiLink = `upi://pay?pa=${upiId}&pn=FundingTrader&am=${amount}&cu=INR`;

    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = upiLink;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.referenceId || !formData.paymentMethod) {
      alert("⚠️ Please fill all fields before submitting.");
      return;
    }

    emailjs
      .send(
        "service_ulaexkk",
        "template_d4f3sxp",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          referenceId: formData.referenceId,
          paymentMethod: formData.paymentMethod,
        },
        "xudcukqGWz3iRnhBl"
      )
      .then(() => {
        setShowSuccess(true);
        setFormData({ name: "", email: "", referenceId: "", paymentMethod: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch(() => alert("❌ Failed to send details. Try again!"));
  };

  return (
    <div className={styles.buyPage}>
      <div className={styles.animatedBg}></div>

      <header className={styles.header}>
        <h1 className={styles.title}>⚡ Choose Your Funding Account</h1>
        <p className={styles.subtitle}>
          Empower your trading journey with instant funding access. <br />
          Select your preferred plan, complete your payment, and get started within minutes!
        </p>
      </header>

      <div className={styles.container}>
        {/* LEFT - Plans */}
        <div className={styles.left}>
          <h2 className={styles.sectionTitle}>💼 Available Plans</h2>
          <p className={styles.planNote}>All plans come with lifetime access and instant evaluation.</p>

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.planCard} ${selected === plan.id ? styles.selected : ""}`}
              onClick={() => {
                setSelected(plan.id);
                setMethod(null);
              }}
            >
              <h3>{plan.name}</h3>
              <p className={styles.price}>{plan.price}</p>
              <p className={styles.desc}>{plan.desc}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}

          <div className={styles.perksBox}>
            <h4>🔥 Why Traders Love Us</h4>
            <ul>
              <li>✔️ Instant Payouts & Transparent Terms</li>
              <li>✔️ Real Trading Conditions</li>
              <li>✔️ 24/7 Customer Support</li>
              <li>✔️ Up to 100% Profit Share</li>
            </ul>
          </div>
        </div>

        {/* RIGHT - Payment Section */}
        <div className={styles.right}>
          <h2 className={styles.paymentHeader}>💳 Complete Your Payment</h2>

          {selected ? (
            <>
              <p className={styles.paymentText}>
                You selected: <b>{plans.find((p) => p.id === selected).name}</b> —{" "}
                {plans.find((p) => p.id === selected).price}
              </p>

              <p className={styles.selectMethod}>💠 Choose your preferred payment method:</p>

              <div className={styles.paymentOptions}>
                {["GPay", "Paytm", "PhonePe", "UPI"].map((option) => (
                  <button
                    key={option}
                    className={`${styles.payButton} ${method === option ? styles.activePay : ""}`}
                    onClick={() => handlePayment(option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {method && (
                <div className={styles.qrSection}>
                  <p className={styles.qrText}>
                    📱 Scan this QR using <b>{method}</b> and complete the payment.
                  </p>

                  <div className={styles.qrBox}>
                    <img
                      src={Myqr}
                      alt="Payment QR"
                      className={styles.customQR}
                    />
                  </div>

                  <p className={styles.qrNote}>
                    Once paid, fill out the confirmation form below to verify your payment.
                  </p>
                </div>
              )}

              <form className={styles.paymentForm} onSubmit={handleSubmit}>
                <h3>🧾 Payment Confirmation Form</h3>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Payment Reference ID"
                  value={formData.referenceId}
                  onChange={(e) => setFormData({ ...formData, referenceId: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Payment Method"
                  value={formData.paymentMethod}
                  readOnly
                />
                <button type="submit" className={styles.confirmButton}>
                  ✅ SUBMIT DETAILS
                </button>
              </form>
            </>
          ) : (
            <p className={styles.selectPrompt}>Please select a plan to continue.</p>
          )}

          <div className={styles.backLink} onClick={() => navigate("/iioo")}>
            ← Back to Dashboard
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className={styles.successPopup}>
          <div className={styles.successBox}>
            <span className={styles.checkmark}>✅</span>
            <p>
              Payment submitted successfully! <br />
              We’re verifying your details and will contact you within a few minutes.
            </p>
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <p>© 2025 FundingTrader — Empowering Smart Traders Worldwide 🌍</p>
        <p className={styles.footerSub}>
          Fast | Secure | Transparent | Trusted by 10,000+ active traders
        </p>
      </footer>
    </div>
  );
};

export default BuyPage;
