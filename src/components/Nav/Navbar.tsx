import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const handleScroll = (id:string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({behavior: "smooth"})
        }
    };

    return (
        <nav className="sticky top-0 z-1000 bg-black py-4">
            <ul className="relative flex justify-center gap-10 m-0 p-0 list-none">
                <li><Link to="/" className="text-white italic text-lg no-underline hover:underline">Home</Link></li>
                <li><Link to="/Menu" className="text-white italic text-lg no-underline hover:underline">Menu</Link></li>
                <li><button onClick={() => handleScroll("reviews")} className="text-white italic text-lg no-underline hover:underline">Reviews</button></li>
                <li><button onClick={() => handleScroll("location")}className="text-white italic text-lg no-underline hover:underline">Location</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
