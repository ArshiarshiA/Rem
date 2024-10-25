"use client"
import useFetch from "@/src/hook/useFetch"
import Link from "next/link"
import DetailGameCard from "@/src/app/games/[game]/component/detailGameCard"

export default function FilterGame({ uniqueId }: { uniqueId: string }) {

    const SelectedGame = useFetch('EntryGames')

    return (
        <div className="text-white flex justify-center max-[939px]:flex-col">
            {
                SelectedGame?.filter(game => game.id == uniqueId)
                    .map(filteredGame => (

                        <DetailGameCard key={filteredGame.id} {...filteredGame}
                            release={filteredGame.detail?.release}
                            information={filteredGame.detail?.information}
                            directors={filteredGame.detail?.directors}
                        >
                            {
                                filteredGame.genres?.map(genre => (
                                    <div key={genre} className="w-fit bg-[#ffffff00] capitalize">
                                        <Link className="border border-yellow-600 rounded-3xl px-3 " href={`/games/genres/${genre}`}>{genre}</Link>
                                    </div>
                                ))
                            }
                        </DetailGameCard>
                    ))
            }
        </div>
    )
}