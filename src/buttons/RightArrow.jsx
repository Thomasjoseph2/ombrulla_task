const RightArrowInCircle = () => {
    return (
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle */}
        <circle cx="50" cy="50" r="45" fill="#5D50C6" />
        {/* Right Arrow */}
        <line x1="35" y1="50" x2="55" y2="50" stroke="white" strokeWidth="3" />
        <polygon points="55,45 65,50 55,55" fill="white" />
      </svg>
    );
  };
  
  export default RightArrowInCircle;
  