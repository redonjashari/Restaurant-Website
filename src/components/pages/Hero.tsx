import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/restaurant.jpg')" }}>
      <div className="border-white border md:p-6 rounded-md bg-red-500/50">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <img src="/logo.png" alt="Goni Bistro Cafe Restaurant" className="max-w-xs block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
