"use client";

import React from "react";
import Header from "./components/Header";

const EventsPage: React.FC = () => {
    return (
        <div
            className="min-h-screen p-8 font-heading text-white"
            style={{
                background: "linear-gradient(#1B1B1B, #701BB7, #8824DC, #B1219D)",
            }}
        >
            <div className="mx-auto max-w-7xl">
                <Header />
            </div>
        </div>
    );
};

export default EventsPage;
