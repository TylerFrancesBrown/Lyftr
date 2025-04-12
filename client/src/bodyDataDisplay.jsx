// bodyDataDisplay.jsx
import './bodyDataDisplay.css';

export default function BodyDataDisplay({ weight, date }) {
  return (
    <button className="body-data-display">
      <div className="body-data-content">
        <div className="body-data-name">{"Weight"}</div>
        <div className="body-data-value">{weight} lbs</div>
        <div className="body-data-meta">{date}</div>
      </div>
      <div className="body-data-icon-container">
        <img src="/vite.svg" alt="Body weight icon" className="body-data-svg-icon" />
      </div>
    </button>
  );
}
