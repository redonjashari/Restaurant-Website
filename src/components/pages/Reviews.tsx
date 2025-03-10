import React from "react";

const Reviews: React.FC = () => {
    return (
        <section>
            <div className="flex-row justify-items-start w-full p-4 bg-green-400"></div>
            <section className="flex md:flex-row items-center p-10">
                <div className="flex-1 md:flex-col items-center">
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    <div className="elfsight-app-a1e5ef5f-21e3-4fff-a445-f5ba70135e7c" data-elfsight-app-lazy></div>
                </div>
            </section>
            <div className="flex-row justify-items-start w-full p-4 bg-red-500"></div>
        </section>
        
    );
};

export default Reviews;
