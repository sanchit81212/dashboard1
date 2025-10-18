import React from "react";
import styles from "./Page5.module.css";

const STOCKS = [
  { name: "Nifty 50", symbol: "NSE:NIFTY" },
  { name: "Bank Nifty", symbol: "NSE:BANKNIFTY" },
  { name: "FinNifty", symbol: "NSE:FINNIFTY" },
  { name: "Midcap Nifty", symbol: "NSE:MIDCPNIFTY" },
  { name: "Reliance Industries", symbol: "NSE:RELIANCE" },
  { name: "HDFC Bank", symbol: "NSE:HDFCBANK" },
  { name: "State Bank of India", symbol: "NSE:SBIN" },
  { name: "ICICI Bank", symbol: "NSE:ICICIBANK" },
  { name: "Infosys", symbol: "NSE:INFY" },
  { name: "Tata Consultancy Services", symbol: "NSE:TCS" },
  { name: "Axis Bank", symbol: "NSE:AXISBANK" },
  { name: "Kotak Bank", symbol: "NSE:KOTAKBANK" },
  { name: "ITC", symbol: "NSE:ITC" },
  { name: "Tata Motors", symbol: "NSE:TATAMOTORS" },
  { name: "Hindustan Unilever", symbol: "NSE:HINDUNILVR" },
  { name: "Adani Enterprises", symbol: "NSE:ADANIENT" },
  { name: "Tata Steel", symbol: "NSE:TATASTEEL" },
  { name: "Power Grid", symbol: "NSE:POWERGRID" },
  { name: "Bajaj Finance", symbol: "NSE:BAJFINANCE" },
  { name: "Maruti Suzuki", symbol: "NSE:MARUTI" },
  { name: "ONGC", symbol: "NSE:ONGC" },
  { name: "Sun Pharma", symbol: "NSE:SUNPHARMA" },
  { name: "Wipro", symbol: "NSE:WIPRO" },
  { name: "UltraTech Cement", symbol: "NSE:ULTRACEMCO" },
];

export default function Page5() {
  const handleClick = (symbol) => {
    window.open(`https://in.tradingview.com/chart/?symbol=${symbol}`, "_blank");
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>📊 Indian Market Live Dashboard</h1>
      <p className={styles.subtext}>
        Track live prices of India’s top indices and stocks. Click any card to
        view the live TradingView chart instantly.
      </p>

      <div className={styles.grid}>
        {STOCKS.map((stock) => (
          <div
            key={stock.symbol}
            className={styles.card}
            onClick={() => handleClick(stock.symbol)}
          >
            <h2>{stock.name}</h2>
            <p>{stock.symbol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
