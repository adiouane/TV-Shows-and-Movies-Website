export const dynamic = 'force-dynamic'
import { db } from "@/app/db"
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from "next/cache";
import Submet from "./submet";
import Image from 'next/image';


async function getMovies(id: string) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.DATABASE_API as string
      },
      next: {
        revalidate: 60 // this means every 60 seconds it will revalidate the data and update it
      }
    }
  );
  return url.json();
}




async function getFeedback(id: string) {
    const data = await db.comment.findMany({
      where: {
        movieId: id
      },    
      orderBy: {
        createdAt: "desc" // descending order means the latest comment will be on top
      }    
    })
    return data;
  }    
  
  
async function postData(formData: FormData){
    "use server";
     
    const data = await  db.comment.create({
      data: {
        message: formData.get('comment') as string,
        movieId: formData.get('id') as string,
        
      },
  });
  revalidatePath("/movies/[id]");
}
  



export default async function Movies({ params }: { params: { id: string } }) {
  
  
  const data = await getFeedback(params.id);
  const movies = await getMovies(params.id);
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold p-5 text-white hover:text-white">
        Top Trending Movies
      </h1>
      <div className="grid gap-4 md:grid-cols-2 px-5 py-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
          alt={movies.title}
          className="rounded-md transition duration-500 ease-in-out transform hover:scale-110 max-h-96"
          style={{ touchAction: 'none' }}
          width={1920}
          height={1080}
        />
        <div className="max-w-3xl">
          <h1 className="text-white text-2xl font-bold">{movies.title}</h1>
          <div className="border-b-2 border-gray-600 my-2">
            <p className="text-slate-100 font-sans text-base py-4">
              {movies.overview}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h6 className="text-gray-400 font-light text-sm">
                Release Date:{" "}
                <span className="text-white font-bold">
                  {movies.release_date}
                </span>
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Rating:{" "}
                <span className="text-white font-bold">
                  {movies.vote_average}
                </span>
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Runtime:{" "}
                <span className="text-white font-bold">
                  {movies.runtime}
                </span>{" "}
                minutes
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Tagline:{" "}
                <span className="text-white font-bold">{movies.tagline}</span>
              </h6>
            </div>
            <div>
              <h6 className="text-gray-400 font-light text-sm">
                Genres:{" "}
                <span className="text-white font-bold">
                  {movies.genres.map((genre: any) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))}
                </span>
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Spoken Languages:{" "}
                {movies.spoken_languages.map((language: any) => (
                  <span className="text-white font-bold" key={language.name}>
                    {language.name},{" "}
                  </span>
                ))}
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Homepage:{" "}
                <a
                  href={movies.homepage}
                  className="text-blue-400 hover:text-blue-500"
                >
                  {movies.homepage}
                </a>
              </h6>
              <h6 className="text-gray-400 font-light text-sm">
                Original Language:{" "}
                <span className="text-white">
                  {movies.original_language}
                </span>
              </h6>
            </div>
            <div className="col-span-2 ">
              <div className="flex flex-col items-center justify-center p-5 w-full">
                {/* feedback components */}
                <div className="flex flex-col items-center p-4 w-full ">
                  <h1 className="text-2xl font-bold text-white">Feedback</h1>
                  <div className="border-2 border-gray-600 rounded-md p-5 w-full">
                    <form action={postData}>
                      <textarea name="comment" className="w-full h-20 rounded-md bg-gray-800 text-white p-2" placeholder="Leave a comment"></textarea>
                      <input type="hidden" name="id" value={params.id} />
                      <Submet />
                    </form>
                    <div className="mt-5 flex flex-col gap-y-1">
                      {data.map((post: any) => (
                        <div className="flex flex-col bg-gray-800 rounded-md p-3" key={post.id}>
                            <h1 className="text-white font-bold">{post.message}</h1>
                        </div>           
                      ))}
                      </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
