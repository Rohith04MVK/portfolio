const Error404 = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://raw.githubusercontent.com/Charlie85270/tail-kit/89066a543ec0a8167d33b68a54f233444fa51596/public/images/landscape/8.svg"
        className="absolute h-full w-full object-cover"
      />

      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You're alone here
          </h1>
          <p className="font-cartoon font-extrabold text-8xl my-40 text-white">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
