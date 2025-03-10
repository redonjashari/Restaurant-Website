import React from "react";

const Location: React.FC = () => {
    return (
        <section className="flex flex-col h-screen items-center justify-center md:gap-y-12">
            <div className="p-10"></div>
            <div className="text-4xl italic font-judson decoration-solid decoration-1">Wo finden Sie uns?</div>
            <div className="flex flex-col md:flex-row-reverse md:gap-x-10 md:items-center p-6 md:p-0 md:pr-64 ">
                <div>
                <div className="text-lg italic font-judson text-black">
                    <a href="https://maps.app.goo.gl/euNCg5bLUGY2mtMV9" className="hover:underline">Thülener Bruch 2, 59929 Brilon</a>
                    <p>Montag-Freitag: Geschlossen <br />Samstag: 11:00 - 20:00 Uhr <br />Sonntag: 11:00 - 20:00 Uhr</p>
                    <p>Für Reservierungen <br />+49 175 9454575</p>
                    <div className="p-3"></div>
                    <div className="flex flex-row items-center space-x-1">
                        <a href="https://www.instagram.com/restaurant_cafe_pizzeria_goni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            <img src="/instagramlogo.png" alt="instagram" className="max-w-20"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100091657389352" target="_blank">
                            <img src="/facebooklogo.png" alt="facebook" className="max-w-15"/>
                        </a>
                    </div>
                </div>

                </div>
                <div className="hidden lg:block w-4 h-full p-1 bg-black" />
                <img src="/aeroport.jpg" alt="aero" className="" />
            </div>
            <div className="p-2"></div>
            <div className="flex-row h-full w-full p-10 bg-black"></div>
        </section>
    );
};

export default Location;
