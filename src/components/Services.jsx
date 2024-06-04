import Card from "./Card";
import destination from '../assets/destination 1.png'
const Services = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="w-1/3">
        <h1 className="uppercase text-[#F85E9F] font-bold">Services</h1>
        <h1 className="text-2xl font-bold">
          Our top value <br />
          categories for you
        </h1>
      </div>
      <div className="flex flex-row w-3/4">
        <Card
          image={destination}
          title="Card Title"
          description="This is a description of the card. It can be a few sentences long."
        />
        <Card
          image={destination}
          title="Card Title"
          description="This is a description of the card. It can be a few sentences long."
        />
                <Card
          image={destination}
          title="Card Title"
          description="This is a description of the card. It can be a few sentences long."
        />
      </div>
    </div>
  );
};

export default Services;
