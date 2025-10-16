import React from 'react';

const Card = () => {
  return (
    <div className="relative p-6 rounded-xl dark:bg-black bg-neutral-100  overflow-hidden shadow-lg w-64 mx-auto">
      {/* Animated background glow */}
      <div className="absolute -inset-x-6 top-1/3 h-1/5  blur-2xl animate-[float_2.5s_ease-in-out_infinite] pointer-events-none"></div>

      {/* Image */}
      <img
        className="w-48 mx-auto animate-[floatimg_10s_ease-in-out_infinite]"
        src="https://uiverse.io/astronaut.png"
        alt="Astronaut"
      />

      {/* Heading */}
      {/* <div className="text-center text-gray-300 font-semibold mt-[-1rem] py-2 animate-pulse">
        We're on Social Media
      </div> */}

      {/* Tailwind custom animations */}
      <style>
        {`
        @keyframes float {
          0%,100% { transform: rotate(-5deg) translateY(-5%); opacity:0.5; }
          50% { transform: rotate(5deg) translateY(5%); opacity:1; }
        }
        @keyframes floatimg {
          0%,100% { transform: translate(-2%,2%) scaleY(0.95) rotate(-5deg); }
          50% { transform: translate(2%,-2%) scaleY(1) rotate(5deg); }
        }
        `}
      </style>
    </div>
  );
};

export default Card;
