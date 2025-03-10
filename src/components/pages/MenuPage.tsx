import React from "react";
import MenuHero from "./MenuHero";
import MenuNavbar from "../Nav/MenuNavbar";

const Menu: React.FC = () => {
    return (
        <div className="MenuApp">
            <MenuNavbar/>
            <MenuHero/>
        </div>
    );
};

export default Menu;