import React, { useState } from "react";
import styles from "./Page6.module.css";

export default function Page6() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    query_type: "Funding Related",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // make mailto link
    const subject = `New Query from ${formData.name}`;
    const body = `
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 WhatsApp: ${formData.whatsapp}
❓ Query Type: ${formData.query_type}

📝 Message:
${formData.message}
    `;

    // create mailto URL
    const mailtoLink = `mailto:sanchitsaini536@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // open user's mail client (Gmail, Outlook, etc.)
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <h1 className={styles.heading}>💬 Any Query? Let’s Talk!</h1>
      <p className={styles.subtext}>
        Our <span>dedicated team</span> is always ready to help you with{" "}
        <b>funding, accounts,</b> or <b>technical issues</b>.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputBox}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputBox}>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.selectGroup}>
          <label>Query Type</label>
          <select
            name="query_type"
            className={styles.select}
            value={formData.query_type}
            onChange={handleChange}
          >
            <option>Funding Related</option>
            <option>Account Issue</option>
            <option>Technical Support</option>
            <option>General Query</option>
          </select>
        </div>

        <div className={styles.inputBox}>
          <textarea
            name="message"
            placeholder="Describe your issue..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.btn}>
          Submit Query 🚀
        </button>
      </form>
    </div>
  );
}
