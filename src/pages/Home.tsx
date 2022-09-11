const Home = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://wallpaperaccess.com/full/6836716.png"
        className="absolute h-full w-full object-cover"
      />

      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <span className="font-cartoon font-bold uppercase text-pink text-8xl">
            Hi, I'm Rohith
          </span>
          <h1 className="font-robo font-bold text-4xl sm:text-4xl text-white leading-tight mt-4 text-left">
            Machine learning & <br /> Backend engineer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
