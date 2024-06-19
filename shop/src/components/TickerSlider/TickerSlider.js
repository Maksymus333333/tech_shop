import React, { useEffect, useState } from 'react';
import './TickerSlider.css';  

const TickerSlider = () => {
  const [tickers, setTickers] = useState([]);
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);

    // Fetch ticker data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost/my-store-api/tickers.php')
      .then(response => response.json())
      .then(data => setTickers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    // Update the current ticker index every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTickerIndex(prevIndex => (prevIndex + 1) % tickers.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [tickers]);


  // Handle manual change to the next ticker
  const handleNextTicker = () => {
    setCurrentTickerIndex(prevIndex => (prevIndex + 1) % tickers.length);
  };

  return (
    <div className="ticker-slider">
      <div className="ticker-container">
        {tickers.map((ticker, index) => (
          <div key={ticker.id} className={`ticker ${index === currentTickerIndex ? 'active' : ''}`}>
            <img className="ticker-image" src={ticker.image_url} alt={`Ticker ${ticker.id}`} />
             {/* Can add other fields you want to display for each ticker */}
          </div>
        ))}
      </div>
      <div className="next">
           {/* Left arrow for manual change to the next ticker */}
        <div className="arrow-left" onClick={handleNextTicker}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M13 1L1.94182 9.75439C1.45186 10.1423 1.43373 10.8795 1.90402 11.291L13 21" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round"/>
          </svg> 
        </div>
          {/* Right arrow for manual change to the next ticker */}
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
