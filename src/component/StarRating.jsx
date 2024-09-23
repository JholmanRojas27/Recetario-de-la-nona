import { useState } from 'react';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }}  // Oculta el input radio
                        />
                        <svg
                            className="star"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path d="M12 .288l2.833 8.718h9.167l-7.417 5.387 2.833 8.717-7.416-5.388-7.416 5.388 2.832-8.717-7.416-5.387h9.166z" />
                        </svg>
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
