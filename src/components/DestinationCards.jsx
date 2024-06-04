const DestinationCards = ({ imgSrc, title, location, price, rating }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
      <img className="w-full" src={imgSrc} alt={title} />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mb-2 w-1/2">{title}</h3>
          <span className="text-pink-500 font-bold text-xl">${price}</span>
        </div>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500 text-lg">{rating} ★</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;
