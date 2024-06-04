const LeftArrowInCircle = () => {
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
        {/* Left Arrow */}
        <line x1="65" y1="50" x2="45" y2="50" stroke="white" strokeWidth="3" />
        <polygon points="45,45 35,50 45,55" fill="white" />
      </svg>
    );
  };
  
  export default LeftArrowInCircle;
  