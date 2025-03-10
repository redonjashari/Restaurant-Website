import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <section>
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/pizzapic.jpg')" }}
      >
        <div className="text-white italic font-judson text-5xl lg:text-9xl font-black">
          <Link to="/Menu" className="no-underline">SPEISEKARTE</Link>
        </div>
      </section>
      <div className="flex-row p-3"></div>
    </section>
  );
};

export default Menu;
