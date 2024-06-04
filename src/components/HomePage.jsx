import GiftButton from "../buttons/Gift";
import Button from "../buttons/Button";
import { useState } from "react";
import PlayButton from "../buttons/PlayButton";
import FrameImage from "../assets/Group 1.png";
import fishImage from '../assets/Rectangle 6 (1).png'
import boatImage from '../assets/Rectangle 6.png'
import Companys from "./Companys";
import Services from "./Services";
import Destinations from "./Destinations";
import DestinationCards from "./DestinationCards";
import PackageSection from "./PackageSection";

const HomePage = () => {
  const [active, setActive] = useState("getStarted");
  return (
    <section className="mt-20 flex w-full items-center justify-center flex-wrap">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row gap-2 text-sm font-bold text-[#F85E9F]">
          <Button
            variant="secondary"
            className="px-5 py-2 rounded-full text-sm flex flex-row gap-2 shadow-md"
          >
            Explore the world!
            <GiftButton />
          </Button>
        </div>
        <div className=" text-6xl font-bold mt-6 ">
          <h1 className="">
            Travel
            <span className="text-[#F85E9F]">
              <span> top </span>
              <br />
              <span className="pt-4 pb-4">destination</span>
            </span>
            <br /> of the world
          </h1>
        </div>
        <p className="mt-6">
          We always make our customer happy by <br />
          providing <br />
          as many choices as possible
        </p>
        <div className="flex flex-row flex-wrap w-1/2 mt-5">
          <Button
            variant={active === "getStarted" ? "primary" : "secondary"}
            className="px-5 py-2 rounded-full text-sm"
            onMouseEnter={() => setActive("getStarted")}
          >
            Get Started
          </Button>
          <Button
            variant={active === "viewDemo" ? "primary" : "secondary"}
            className="px-5 py-2 rounded-full text-sm flex gap-1"
            onMouseEnter={() => setActive("viewDemo")}
          >
            <PlayButton isActive={active === "viewDemo"} />
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <img className="h-[80%]" src={FrameImage} alt="frame image" />
      </div>

      <Companys />
      <Services />
      <Destinations />

      <div className=" flex justify-center items-center min-h-screen">
        <div className="flex flex-wrap justify-center gap-8 p-4">
          <DestinationCards
            imgSrc={boatImage}
            title="Paradise Beach, Bantayan Island"
            location="Rome, Italy"
            price="550.16"
            rating="4.8"
          />
          <DestinationCards
            imgSrc={fishImage}
            title="Ocean with full of Colors"
            location="Maldives"
            price="20.99"
            rating="4.5"
          />
          <DestinationCards
            imgSrc={boatImage}
            title="Mountain View, Above the cloud"
            location="United Arab Emirates"
            price="150.99"
            rating="5.0"
          />
        </div>
      </div>
      <PackageSection/>
    </section>
  );
};

export default HomePage;
