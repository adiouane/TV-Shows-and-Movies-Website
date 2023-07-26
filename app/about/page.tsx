import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img src='https://i.pinimg.com/originals/63/d3/4c/63d34c85462603dbd508b98e531e88e3.jpg' alt="background" className="absolute h-full w-full object-cover" />
      {/* <Image src="/images/westworld.gif" alt="background" className="absolute w-full h-full object-cover opacity-60 z-0" 
        style={{ touchAction: 'none' }}
        width={1920}
        height={1080}
      /> */}
      <div className="z-10 text-center">
        <p className="font-serif text-white mt-3 text-2xl max-w-3xl text-center mx-auto">
          Hi, I&rsquo;m <span className="text-orange-500 hover:text-green-600"> Amine Diouane </span>, a passionate developer who is excited about learning Next.js and exploring various technologies in this project. As a team of movie enthusiasts, we aim to share our love for movies with the world.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mt-6 p-10">
          <a href="https://nextjs.org/docs" className="p-6 border rounded-xl hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white">
            <h3 className="text-white text-2xl font-bold mb-2">Documentation</h3>
            <p className="text-lg text-teal-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
          <a href="https://nextjs.org/learn" className="p-6 border rounded-xl hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white">
            <h3 className="text-white text-2xl font-bold mb-2">Learn</h3>
            <p className="text-lg text-teal-50">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
          <a href="" className="p-6 border rounded-xl hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white">
            <h3 className="text-white text-2xl font-bold mb-2">Examples</h3>
            <p className="text-lg text-teal-50">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 border rounded-xl hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white"
          >
            <h3 className="text-white text-2xl font-bold mb-2">Deploy</h3>
            <p className="text-lg text-teal-50">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white">connect with Me</h1>
        <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/aminediouane/" title="linkedin" target="_blank">
        <Image src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
        width={50}
        height={50}
        ></Image>
      </a>
      <a href="https://github.com/adiouane" title="github" target="_blank">
        <Image src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
        width={50}
        height={50}
        ></Image>
      </a>
      <a href="https://www.instagram.com/aminediouane13/" title="instagram" target="_blank">
        <Image src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
        width={50}
        height={50}
        ></Image>
      </a>
        <a href="https://www.facebook.com/aminediwane.90/" title="facebook" target="_blank">
        <Image src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
        width={50}
        height={50}
        ></Image>
        </a>
        <a href="https://twitter.com/AmineDiouane" title="twitter" target="_blank">
        <Image src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
        width={50}
        height={50}
        ></Image>
        </a>
    </div>
        </div>

    </div>
  );
};
