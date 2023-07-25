import Image from 'next/image'
import Hero from './hero'
import TopTvShow from './tvshow/page'
import Movies from './movies/page'
import Footer from './footer'

export default function Home() {
  return (
    <main className="flex p-2 flex-col items-center justify-between" >
      {/* add image to backgeound */}
      <Hero />
      <div className="p-3"></div>
      <TopTvShow />
      <Movies />
    </main>
  )
}
