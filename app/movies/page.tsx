import Link from "next/link";
import { Trending } from "../interfaces";
import Image from "next/image";

async function getMovies() {
    const url = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
        headers: {
            accept: 'application/json',
            Authorization: process.env.DATABASE_API as string
          },
          next:{
            revalidate: 60 // this means every 60 seconds it will revalidate the data and update it
          }
    }
    );
    return url.json();
}
    
export default async function TopMovies() {
  const movies: Trending = await getMovies();
  return (
    <div className="flex flex-col items-center p-4">
      <div className="absolute bg-gradient-to-r from-black to-transparent z-0"></div>
      <div className="flex flex-wrap justify-center">
        <h1 className="text-4xl font-bold mb-4 p-8 text-white hover:text-yellow-500">
          Top Trending Movies
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.results.map((movie: any, index: number) => (
          <div key={index} className="flex flex-col items-center justify-between bg-gray-800 rounded-md p-4">
            <Link href={`/movies/${movie.id}`} passHref>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md transition duration-500 ease-in-out transform hover:scale-110"
                style={{ touchAction: 'none' }}
                width={1920}
                height={1080}
              />
              <h1 className="text-white text-lg font-bold p-3">{movie.title}</h1>
              <p className="text-gray-400 text-sm line-clamp-3">{movie.overview}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
