// LiftDisplay.jsx
import './LiftDisplay.css';

export default function LiftDisplay({ name, weight, date, set, rank, icon }) {
  return (
    <button className={`lift-display ${rank}`}>
      <div className="lift-content">
        <div className="lift-name">{name}</div>
        <div className="lift-weight">{weight} lbs</div>
        <div className="lift-meta">{date} - {set}</div>
      </div>
      {icon && (
        <div className="lift-icon-container">
          <img src={icon} alt={`${rank} icon`} className="lift-svg-icon" />
        </div>
      )}
    </button>
  );
}
