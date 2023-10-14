import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeatureItem from "./FeatureItem";
import Logo from "./Logo";
import Quality from "./Quality";
import CardCoffee from "./CardCoffee";
import { useState } from "react";

function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Logo></Logo>
      <Banner></Banner>
      <Quality></Quality>
      {/* Our Popular Products */}
      <div className="background2 h-screen object-cover">
        <h2 className="text-4xl text-center mt-20">
          Our Popular Products : {coffees.length}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          {coffees.map((coffee) => (
            <CardCoffee
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CardCoffee>
          ))}
        </div>
        <Link to={'/addCoffees'}>
          <div className="text-center mt-6">
            <button className="text-current p-3 bg-blue-200 font-bold rounded-md ">Add More</button>
          </div>
        </Link>
      </div>

      <FeatureItem></FeatureItem>
    </>
  );
}

export default Home;
