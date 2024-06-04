import LeftArrow from "../buttons/LeftArrow";
import RightArrow from "../buttons/RightArrow";

const Destinations = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="w-3/4 px-4">  {/* Adjust width as needed */}
        <h1 className="uppercase text-[#F85E9F] font-bold">Top Destination</h1>
        <p className="text-2xl font-bold">Explore top destinations </p>
      </div>
      <div className="flex flex-row justify-end w-1/4 px-4"> 
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );
};

export default Destinations;
