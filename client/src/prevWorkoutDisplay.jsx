// prevWorkoutDisplay.jsx
import './prevWorkoutDisplay.css';

export default function WorkoutDisplay({ title, date }) {
    return (
      <div className={`workout-display`}>
        <div className="workout-display-top-bar">
            <div className="top-bar-left">{date}</div>
            <div className="top-bar-center">{title}</div>
            <button className="edit-button">
                <img src="/edit.svg" alt="Edit" className="edit-svg-icon" />
            </button>
        </div>
      </div>
    );
  }