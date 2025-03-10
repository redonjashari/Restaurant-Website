import React from "react";

const GoogleMap: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-[500px] w-full">
            <script
                title="Google Maps Location"
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Th%C3%BClener+Bruch+2,+59929+Brilon"
            ></script>
        </div>
    );
};

export default GoogleMap;