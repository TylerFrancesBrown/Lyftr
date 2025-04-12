import { useState } from 'react';
import './bodyDataDisplay.css';

export default function BodyDataDisplay({ weight, date, calories }) {
  const [view, setView] = useState('weight');

  const handleNext = (e) => {
    e.stopPropagation();
    if (view === 'weight') setView('calories');
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (view === 'calories') setView('weight');
  };

  return (
    <button className="body-data-button">
      <div className="body-data-slider-wrapper">
        <div className={`body-data-slider ${view}`}>
          {/* Weight View */}
          <div className="body-data-top-row slide-item">
            <div className="body-data-text-block">
              <div className="body-data-name">Weight</div>
              <div className="body-data-info">
                <div className="body-data-value">{weight} lbs</div>
                <div className="body-data-meta">{date}</div>
              </div>
            </div>
            <div className="body-data-icon-container">
              <img src="/scale.svg" alt="icon" className="body-data-svg-icon" />
            </div>
          </div>

          {/* Calories View */}
          <div className="body-data-top-row slide-item">
            <div className="body-data-text-block">
              <div className="body-data-name">Maintenance Calories</div>
              <div className="body-data-info">
                <div className="body-data-value">{calories} KCal</div>
                <div className="body-data-meta">{date}</div>
              </div>
            </div>
            <div className="body-data-icon-container">
              <img src="/flame.svg" alt="calories icon" className="body-data-svg-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="body-data-arrows">
        <span className="arrow-left" onClick={handlePrev}>‹</span>
        <span className="arrow-right" onClick={handleNext}>›</span>
      </div>
    </button>
  );
}
