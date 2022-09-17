const About = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://wallpaperaccess.com/download/vector-landscape-3665285"
        className="absolute h-full w-full object-cover"
      />

      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
        <div className="w-full flex flex-col items-center justify-between relative z-10">
          <p className="flex flex-col items-center font-extrabold text-4xl text-center md:text-6xl text-white">
            A whole page about me!
          </p>
          <p className="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
            My name is Rohith. 18 y/o developer from India, still consider
            myself new but always learning new things. I absolutely love to
            write code, and discuss code, and everything around code, haha. Got
            a knack for programming, and building those cool ML models you've
            always dreamt of. Journey been a crazy one, went from being scared
            by HTML to loving Machine learning in a single year, during the
            pandemic. The people I met on the way, the friendships made, lessons
            learned all this was a great adventure! 💙
          </p>
          <button
            className="border-background py-3 px-4 text-lg text-white font-bold uppercase mt-10"
            onClick={() => console.log('Do something.')}
          >
            Résumé
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
