import React from "react";
import {BsArrowRight} from 'react-icons/bs';
import ImageCard from "./components/imageCard";

const Home = () => {
  return (
    <main>
      <section>
        <h1 className="text-3xl font-lora my-4 ml-3">
          Modern interior
        </h1>
        <p className="w-[250px] font-mont ml-3 ">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <div className="flex items-center gap-3 my-6">
          <p>Read more</p>
          <div>
            <BsArrowRight size={20}/>
          </div>
          
        </div>
      </section>
      <section>
        <ImageCard/>
      </section>
    </main>
  );
};

export default Home;
