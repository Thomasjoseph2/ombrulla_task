
const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-8 ml-5">
      <div className="flex justify-center items-center p-4">
        <div className="h-14 w-14 bg-gray-200 rounded-full overflow-hidden">
          <img src={image} alt="Card image" className="h-full w-full object-cover " />
        </div>
      </div>
      <div className="px-6 py-4 flex flex-col m-2">
        <h2 className="text-xl font-bold text-gray-800 mx-auto ">{title}</h2>
        <p className="text-gray-600  text-sm p-10 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
