import PackageImage from "../assets/Group 9238.png";

const PackageSection = () => {
  return (
    <div className="flex flex-row mb-5">
      <div className="w-[70%]">
        <img className='w-[90%] ' src={PackageImage} alt="package image" />
      </div>
      <div className="w-[30%]">
        <div className="m-5 p-5">
          <h1 className="uppercase font-bold text-[#F85E9F] mt-7">travel point</h1>
          <h1 className="text-xl font-bold mt-4">
            We helping you find your dream location
          </h1>
          <p className="text-gray-500 text-sm mt-10">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="grid grid-rows-2 grid-cols-2 gap-7 mt-10">
            <div className="border border-black w-35 h-[8rem] rounded-lg flex flex-col items-center justify-center">
              <h1 className="font-bold text-red-600 text-lg">500+</h1>
              <h1 className="text-[11px]">Holiday Package</h1>
            </div>
            <div className="border border-black w-35 h-25 rounded-lg flex flex-col items-center justify-center">
              <h1 className="font-bold text-red-600 text-lg">100</h1>
              <h1 className="text-[11px]">Luxury Hotel</h1>
            </div>
            <div className="border border-black w-35 h-25 rounded-lg flex flex-col items-center justify-center">
              <h1 className="font-bold text-red-600 text-lg">7</h1>
              <h1 className="text-[11px]">Premium Airlines</h1>
            </div>
            <div className="border border-black w-35 h-25 rounded-lg flex flex-col items-center justify-center">
              <h1 className="font-bold text-red-600 text-lg">2k+</h1>
              <h1 className="text-[11px]">Happy customer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
