import { React } from "react";

export const About = () => {

  return (

    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img src="https://wallpaperaccess.com/download/vector-landscape-3665285" class="absolute h-full w-full object-cover" />
      <div class="inset-0 bg-black opacity-25 absolute">
      </div>
      <div class="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
        <div class="w-full flex flex-col items-center justify-between relative z-10">
          <p class="flex flex-col items-center font-extrabold text-4xl text-center md:text-6xl text-white">
            A whole page about me!
          </p>
          <p class="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis felis, eleifend at tellus ut, imperdiet suscipit sem. Donec vel elementum diam, ut aliquam dolor. Curabitur in dignissim nibh. Maecenas quis mi pretium, consectetur justo ut, varius sem. Vivamus rhoncus sem id quam tincidunt ullamcorper a ac tortor.
          </p>
          <button href="#" class="border-background py-3 px-4 text-lg text-white font-bold uppercase mt-10">
            Résumé
          </button>
        </div>
      </div>
    </div>

  );
};