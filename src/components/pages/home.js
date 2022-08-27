import React from "react";

export const Home = () => {
    return (
        <div class="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="https://wallpaperaccess.com/full/6836716.png" class="absolute h-full w-full object-cover" />
            <div class="inset-0 bg-black opacity-25 absolute">
            </div>
            <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                    <span class="font-cartoon font-bold uppercase text-pink">
                        Hi, I'm Rohith
                    </span>
                    <h1 class="font-robo font-bold text-6xl sm:text-7xl text-white leading-tight mt-4 text-left">
                        Machine learning &
                        <br />
                        Backend engineer
                    </h1>
                    <a href="#" class="block bg-background hover:bg-gray py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
                        Discover
                    </a>
                </div>
            </div>
        </div>

    );
};