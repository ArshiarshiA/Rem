import Header from "@/components/header/header";
import DirectorSlider from "@/components/sliders/directorSlider/directorSlider";
import EntryGameSlider from "@/components/sliders/EntrygameSlider/gameSlider";
import GameIsArtSlider from "@/components/sliders/gameIsArtSlider/gameIsArtSlider";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { PiPaintBrush } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <Header />
      <main className="py-12 px-9">
        <div className="max-w-[1400px] m-auto flex gap-4">
          <div className="w-8/12">
            <EntryGameSlider></EntryGameSlider>
            <div className="py-20">
              <div className="flex justify-between items-center">
                <h1 className="text-white font-extralight text-3xl">Game is art Games</h1>
                <div className="bg-green-400 text-white px-3 rounded-md">
                  <Tooltip title='GAME IS ART' >
                    <IconButton>
                      <PiPaintBrush size={30} />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
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
    </>
  );
}