import DirectorSlider from "@/components/sliders/directorSlider/directorSlider";
import EntryGameSlider from "@/components/sliders/EntrygameSlider/gameSlider";
import GameIsArtSlider from "@/components/sliders/gameIsArtSlider/gameIsArtSlider";
import { IconButton, Tooltip } from "@mui/material";
import { PiPaintBrush } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import AllGameSlider from "@/components/sliders/allGameSlider/allGameSlider";
import GenresGameSlider from "@/components/sliders/genresSlider/genresSlider";

export default function Home() {
  return (
    <>
      <main className="py-12 px-9">
        <div className="max-w-[1400px] m-auto flex gap-4">
          <div className="w-8/12">
            <EntryGameSlider></EntryGameSlider>
            <div className="py-11">
              <h1 className="text-white font-extralight text-3xl pl-2 border-l border-l-yellow-600">Game is art Games</h1>
              <GameIsArtSlider></GameIsArtSlider>
            </div>
          </div>
          <div className="w-4/12">
            <div className="max-w-[400px] flex justify-between items-center">
              <h1 className="text-yellow-600 text-3xl mb-2">Productors</h1>
              <Link className="text-white underline" href={'/games'}>see more</Link>
            </div>
            <DirectorSlider></DirectorSlider>
          </div>
        </div>
      </main>
      <section className="px-5">
        <div className="max-w-[1400px] m-auto text-white">
          <Link className="flex items-center text-4xl border-l-8 border-l-yellow-600 pl-3 w-fit mb-5" href={'/games/genres'}>
            Genres
            <FaAngleRight />
          </Link>
          <GenresGameSlider></GenresGameSlider>
        </div>
      </section>
      <section className="px-5 pt-32">
        <div className="max-w-[1400px] m-auto text-white">
          <Link className="flex items-center text-4xl border-l-8 border-l-yellow-600 pl-3 w-fit" href={'/games'}>
            All Games
            <FaAngleRight />
          </Link>
          <div className="py-7">
            <AllGameSlider />
          </div>
        </div>
      </section>
    </>
  );
}