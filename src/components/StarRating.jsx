import { useState } from "react";
import "./StarRating.css";

function StarRating({
  maxRating = 5,
  color = "#f59e0b",
  size = 36,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const safeMaxRating = Math.max(1, Math.floor(maxRating));
  const activeRating = hoverRating || rating;

  function handleRating(value) {
    setRating(value);
    onSetRating?.(value);
  }

  return (
    <div
      className={`star-rating ${className}`}
      onMouseLeave={() => setHoverRating(0)}
      style={{ "--star-color": color, "--star-size": `${size}px` }}
    >
      <div className="stars">
        {Array.from({ length: safeMaxRating }, (_, index) => {
          const value = index + 1;

          return (
            <button
              key={value}
              type="button"
              className={`star-button ${value <= activeRating ? "active" : ""}`}
              onClick={() => handleRating(value)}
              onMouseEnter={() => setHoverRating(value)}
              onFocus={() => setHoverRating(value)}
              onBlur={() => setHoverRating(0)}
              aria-label={`Rate ${value} out of ${safeMaxRating}`}
              aria-pressed={rating === value}
            >
              <svg
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                aria-hidden="true"
              >
                <path
                  d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z"
                  fill="currentColor"
                />
              </svg>
            </button>
          );
        })}
      </div>

      {messages.length >= safeMaxRating && activeRating > 0 && (
        <span className="rating-message">{messages[activeRating - 1]}</span>
      )}
    </div>
  );
}

export default StarRating;
