"use client"
import DetailGameCard from "@/components/detailGameCard/detailGameCard";
import useFetch from "@/hook/useFetch"
import Link from "next/link";

export default function GameInfoPage({ params }: { params: { game: string } }) {

    let SelectedGame = useFetch('EntryGames')

    return (
        <section className='pt-20'>
            <div className="max-w-[1100px] m-auto">
                <div className="text-white flex justify-center">
                    {
                        SelectedGame?.filter(game => game.id == params.game)
                            .map(filteredGame => (

                                <DetailGameCard {...filteredGame}
                                    release={filteredGame.detail?.release}
                                    information={filteredGame.detail?.information}
                                    directors={filteredGame.detail?.directors}
                                >
                                    {
                                        filteredGame.genres?.map(genre => (
                                            <div className="w-fit bg-[#ffffff00] capitalize">
                                                <Link className="border border-yellow-600 rounded-3xl px-3 " href={`/games/genres/${genre}`}>{genre}</Link>
                                            </div>
                                        ))
                                    }
                                </DetailGameCard>
                            ))
                    }
                </div>
            </div>
        </section>
    )
}