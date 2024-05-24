import React, { useEffect, useState } from 'react';
import './TickerSlider.css';  

const TickerSlider = () => {
  const [tickers, setTickers] = useState([]);
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost/my-store-api/tickers.php')
      .then(response => response.json())
      .then(data => setTickers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTickerIndex(prevIndex => (prevIndex + 1) % tickers.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [tickers]);

  const handleNextTicker = () => {
    setCurrentTickerIndex(prevIndex => (prevIndex + 1) % tickers.length);
  };

  return (
    <div className="ticker-slider">
      <div className="ticker-container">
        {tickers.map((ticker, index) => (
          <div key={ticker.id} className={`ticker ${index === currentTickerIndex ? 'active' : ''}`}>
            <img className="ticker-image" src={ticker.image_url} alt={`Ticker ${ticker.id}`} />
            {/* Додайте інші поля, які ви хочете відобразити про кожен тікер */}
          </div>
        ))}
      </div>
      <div className="next">
        <div className="arrow-left" onClick={handleNextTicker}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M13 1L1.94182 9.75439C1.45186 10.1423 1.43373 10.8795 1.90402 11.291L13 21" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"/>
          </svg> 
        </div>
        <div className="arrow-right" onClick={handleNextTicker}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M1 1L12.0582 9.75439C12.5481 10.1423 12.5663 10.8795 12.096 11.291L1 21" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TickerSlider;
