import React, { useState } from "react";
import styles from "./Faq.module.css";
import { MessageCircle, TrendingUp, Shield, Clock, Zap } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      icon: <TrendingUp className={styles.iconGlow} />,
      question: "What is FundingPips?",
      answer:
        "FundingPips is a world-class trading platform that empowers traders to prove their skills in a simulated environment and earn real profit payouts — with zero personal risk. Built by traders, for traders."
    },
    {
      icon: <Shield className={styles.iconGlow} />,
      question: "How does the evaluation process work?",
      answer:
        "Once you purchase a challenge, you’ll trade on our simulated accounts. Meet the profit target under risk rules, and you’ll get funded. Simple, transparent, and designed to reward discipline."
    },
    {
      icon: <Clock className={styles.iconGlow} />,
      question: "When will I receive my payout?",
      answer:
        "After you pass the evaluation and reach the payout milestone, you can request your first payout anytime. We process all withdrawals within 24–48 hours — directly to your preferred payment method."
    },
    {
      icon: <Zap className={styles.iconGlow} />,
      question: "Can I trade my own strategy?",
      answer:
        "Yes! You can use any trading style you prefer — scalping, swing trading, news trading — as long as you respect the trading rules. We believe in trader freedom and creativity."
    },
    {
      icon: <MessageCircle className={styles.iconGlow} />,
      question: "What happens if I break a rule?",
      answer:
        "Violating a rule (like exceeding daily loss limits) ends that specific challenge account. But don’t worry — you can restart anytime and keep refining your strategy toward long-term consistency."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Everything you need to know about how FundingPips works — from evaluation to payouts.
        </p>
      </div>

      <div className={styles.faqGrid}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>{faq.icon}</div>
              <h3 className={styles.question}>{faq.question}</h3>
              <span className={styles.toggleIcon}>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
