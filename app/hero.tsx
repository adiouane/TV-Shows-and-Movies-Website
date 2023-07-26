// pages/Hero.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <img src="https://th.bing.com/th/id/R.60dbf90ac981dfc91bc962087c980338?rik=6PIwUjs0Jv0Hcw&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f8200000%2fBreaking-Bad-breaking-bad-8272743-1280-1024.jpg&ehk=%2bwswu0e6Gm9pz4Y3m5Zpq6D7oTUViQppSydFb0L7ImM%3d&risl=&pid=ImgRaw&r=0" alt="background" className="absolute h-full w-full object-cover" />
        {/* <Image src="https://wallpapercave.com/wp/fidX227.jpg" alt="background" className="absolute h-full w-full object-cover"
          style={{ touchAction: 'none' }}
          width={1920}
          height={1080}
        /> */}
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
