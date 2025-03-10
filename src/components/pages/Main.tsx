import React from "react";

const Main: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center flex-col py-5 space-y-5">
      <div className="flex-row justify-items-start w-full p-4 bg-black"></div>
      <div className="text-4xl italic underline font-judson">OUR STORY</div>
      <img src="/newpic.png" alt="Seit1992" className=" rounded-lg" />
      <div className="italic font-judson">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
      sed diam nonumy eirmod tempor invidunt ut labore 
      et dolore magna aliquyam erat, sed diam voluptua. 
      At vero eos et accusam et justo duo dolores et ea rebum. 
      Stet clita kasd gubergren, no sea takimata sanctus 
      est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
      et ea rebum. Stet clita kasd gubergren, 
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <div className="flex-row justify-items-start w-full p-4 bg-black"></div>
    </section>
  );
};

export default Main;
