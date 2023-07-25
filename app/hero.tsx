// pages/Hero.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
        <Image src="/images/videoplayback(2).gif" alt="background" className="absolute h-full w-full object-cover"
          style={{ touchAction: 'none' }}
          width={1920}
          height={1080}
        />
      {/* <div className="absolute bg-black opacity-60 inset-0 z-0"></div> */}
      <div className="z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Movie and TV Show Website</h1>
        <p className="text-xl font-extrabold">Discover your favorite movies and TV shows.</p>
        <Link href="/tvshow">
        <button  className="mt-4 px-6 py-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-900 hover:text-yellow-500 font-bold transition duration-300 ease-in-out">
          Explore Now
        </button>
        </Link>
      </div>
    </div>
  );
};


export default Hero;
