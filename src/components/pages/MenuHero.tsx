import React from "react";

const MenuHero: React.FC = () => {
    return (
        <section>
            <section className="relative flex items-center justify-center h-100 bg-cover bg-center"
            style={{backgroundImage: "url('/pizzastockimage.jpg')"}}>
                <div className="flex flex-row justify-center md:w-120 md:p-15 w-70 p-12 rounded-xl bg-white shadow-2xl">
                    <div className=" flex items-center self-center text-black font-display font-extrabold text-3xl md:text-6xl">
                        SPEISEKARTE
                    </div>
                </div>
            </section>
            <div className="flex flex-row p-5"></div>
            <div className="flex flex-row justify-center">
                <div className="font-menu text-7xl underline underline-offset-5">Pizza</div> 
            </div>
            <div className="flex flex-row p-5"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-150 space-x-30">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">70. MARGHERITA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce und Käse</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu  text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">5.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">8.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-136 space-x-17">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">71. CIPOLLA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse und Zwiebeln</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">6.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-142 space-x-23">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">72. FUNGHI</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse und Pitze</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">6.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-139 space-x-20">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">73. SALAMI</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse und Salami</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">6.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-136.5 space-x-17">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">74. PROSCIUTTO</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse und Schinken</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">6.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-150 space-x-29">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">75. TONNO</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce und Käse<br />und Thunfisch</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">10.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-146 space-x-25">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">76. PICCANTE</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse, <br />Zwiebeln und Scharfe Peperoni</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">6.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-140 space-x-19">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">77. TONNO & CIPOLLA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse,<br />Thunfisch, Zwiebeln und Knoblauch</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-155 space-x-34">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">78. SANTA LUCIA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse,<br />Schinken und Pitze</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">10.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-156 space-x-34">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">79. RUSTICA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse,<br />Salami und Pitze</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">10.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-137 space-x-16">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">80. MISTA</div>
                        <div className="font-smallmenu text-[11px] ">
                            Mit Tomatensauce und Käse, Schinken,<br /> 
                            Salami, Thunfisch und Pitze
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-155 space-x-34">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">81. HAWAII</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse,<br /> Schinken und Ananas</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">10.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-142 space-x-21.5">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">82. QUATTRO STAGIONI</div>
                        <div className="font-smallmenu text-[11px] ">
                            Mit Tomatensauce, Käse, Salami,<br /> 
                            Schinken, Pitze und Paprika
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-145 space-x-24">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">83. CALZONE</div>
                        <div className="font-smallmenu text-[11px] ">
                            Pizzatasche mit Tomatensauce,<br /> 
                            Käse, Schinken, Salami und Pitze
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-142 space-x-21">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">84. DELICIOSA</div>
                        <div className="font-smallmenu text-[11px] ">
                            Mit Tomatensauce, Käse, Schinken, <br />
                            Pitze, Zwiebeln und Knoblauch
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.00€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-140 space-x-19">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">85. MOZZARELLA</div>
                        <div className="font-smallmenu text-[11px] ">Pizzatasche mit Tomatensauce,<br /> 
                        Käse, Mozarella Käse und Basilikum
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-147 space-x-26">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">86. LEONA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce, Käse,<br /> Schinken, Salami und Spiegelei</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-145 space-x-24">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">87. NORA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce und Käse,<br /> Thunfisch, Paprika und Spiegelei</div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-131 space-x-10">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">88. GYROS SPECIALE</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce, Käse, Gyros,<br /> 
                            Salat, Tomatenscheiben, Gekochtes Ei,<br /> 
                            Zwiebeln und Hausgemachtem Spezial-Dressing 
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">12.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-131 space-x-10">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">89. TONNO SPEZIALE</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce, Käse, Thunfisch,<br />
                             Salat, Tomatenscheiben, Gekochtes Ei,<br />
                             Zwiebeln und Hausgemachtem Spezial-Dressing 
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">12.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-127 space-x-6">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">90. SCHINKEN SPEZIALE</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce, Käse, Schinken,<br />
                            Salat,  Tomatenscheiben, Zwiebeln,<br />
                            Gekochtes Ei und Hausgemachtem Spezial-Dressing 
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">12.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-127 space-x-6">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">91. SALAMI SPEZIALE</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce, Käse, Salami, Salat,<br />
                            Tomatenscheiben, Zwiebeln,<br />
                            Gekochtes Ei und Hausgemachtem Spezial-Dressing 
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">12.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-142 space-x-21">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">92. CHEF</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce und Käse, Paprika,<br />
                            Zwiebelein, Pitze und scharfe Peperoni
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">8.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">11.00€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-139 space-x-17">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">93. GONI</div>
                        <div className="font-smallmenu text-[10px] ">
                            Mit Tomatensauce, Käse, Schinken, <br />
                            Salami, Thunfisch ,Pitze, Zwiebeln,<br />
                            Paprika, scharfe Peperoni und Knoblauch
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Kleine</div>
                            <div className="font-smallmenu font-bold text-1xl">9.50€</div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">Große</div>
                            <div className="font-smallmenu font-bold text-1xl">12.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>
            <div className="flex flex-row p-4"></div>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-row md:space-x-150 space-x-29">
                    <div className="flex flex-col md:space-y-2 space-y-1">
                        <div className="font-smallmenu text-1xl">PARTY PIZZA</div>
                        <div className="font-smallmenu text-[11px] ">Mit Tomatensauce und Käse</div>
                        <div className="font-smallmenu font-bold text-[11px] marker:text-black">
                            Jeder weitere Belag nach Ihren <br />
                            Wunschen wird mit 3,50€ berechnet
                        </div>

                    </div>
                    <div className="flex flex-row md:space-x-20 space-x-10">
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl"></div>
                            <div className="font-smallmenu font-bold text-1xl"></div>
                        </div>
                        <div className="flex flex-col md:space-y-2 space-y-1">
                            <div className="font-smallmenu text-1xl">50 CM</div>
                            <div className="font-smallmenu font-bold text-1xl">17.50€</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-2"></div>
            <div className="flex flex-row justify-center">
                <hr className="bg-black w-240 h-0.4"/>
            </div>

        </section>
    );
};

export default MenuHero;