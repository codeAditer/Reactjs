import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"

export default function StarRating({ noOfStars = 10 }) {
 
    const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => setRating(getCurrentIndex);

  const handleMouseEnter = (getCurrentIndex) => setHover(getCurrentIndex);

  const handleMouseLeave = () => setHover(rating);

  return (
    
      <div className="star-rating" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'  }}>

      
{[...Array(noOfStars)].map((_, index) => {
  index += 1;

  return (
    <FaStar
      key={index}
      size={70}
      className={index <= (hover || rating) ? "active" : "inactive"}
      onClick={() => handleClick(index)}
      onMouseMove={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
    />
  );
})}
</div>
  
  );
}
