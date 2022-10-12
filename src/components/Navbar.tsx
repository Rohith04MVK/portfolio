import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <nav className="top-0 z-50 w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 bg-background">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img
                className="rounded-full h-8 w-8 object-cover relative"
                src="https://cdn.discordapp.com/attachments/796370670547632178/1029764827092091012/DALLE_2022-10-12_20.05.35_-_digital_art_of_a_cute_kittty_wearing_a_witch_hat_on_a_cold_night_sitting_inside_a_balck_pot.png"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-text rounded-md outline-none focus:border-gray focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-text hover:text-blue-600">
                <a href="/">Home</a>
              </li>
              <li className="text-text hover:text-blue-600">
                <a href="/about">About</a>
              </li>
              <li className="text-text hover:text-blue-600">
                <a href="/projects">Projects</a>
              </li>
              <li className="text-text hover:text-blue-600">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
