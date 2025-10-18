import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Page4.module.css";

const faqs = [
  {
    question: "What is the maximum daily profit limit?",
    answer:
      "There is no specific cap on your daily profit. You can earn as much as your trading performance allows. However, consistent performance with proper risk management is always encouraged to sustain long-term profitability.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "Yes, withdrawals can be requested at any time. Our payment system ensures all withdrawals are processed within 24 to 48 business hours. You’ll receive your funds securely to your registered account or wallet.",
  },
  {
    question: "Is there any hidden fee?",
    answer:
      "We maintain complete transparency in our fee structure. There are no hidden charges or surprise costs. All fees and commissions are displayed clearly on your dashboard before any transaction is processed.",
  },
  {
    question: "Can I use automated bots?",
    answer:
      "Yes, trading bots and expert advisors (EAs) are supported. Just ensure they follow ethical trading standards and comply with our fair usage policy to avoid any misuse or exploit of trading systems.",
  },
  {
    question: "Do you support weekend trading?",
    answer:
      "Yes, weekend trading is supported for specific markets such as crypto. For forex and other assets, you can hold positions over the weekend depending on the instrument’s trading hours and rules.",
  },
  {
    question: "How does profit sharing work?",
    answer:
      "Profit sharing is calculated at the end of each trading cycle. You retain the majority of your profits while a small percentage is used to sustain platform operations, ensuring transparency and sustainability.",
  },
  {
    question: "What happens if I breach the drawdown limit?",
    answer:
      "If the maximum drawdown is breached, your account will automatically pause to protect capital. Our team will review your performance, and depending on the breach, you might be eligible for an account reset or partial recovery.",
  },
];

const Page4 = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <p className={styles.subtitle}>
        Our Support Team is available 24/7 to help you trade smarter and grow faster.
      </p>

      <div className={styles.faqBox}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqItem} ${
              active === index ? styles.active : ""
            }`}
            onClick={() => toggle(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.question}>
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: active === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
