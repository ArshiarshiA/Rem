"use client"
import useFetch from "@/src/hook/useFetch"
import Link from "next/link"
import DetailGameCard from "@/src/components/detailGameCard/detailGameCard"

export default function FilterGame({ uniqueId }: { uniqueId: string }) {

    let SelectedGame = useFetch('EntryGames')

    return (
        <div className="text-white flex justify-center">
            {
                SelectedGame?.filter(game => game.id == uniqueId)
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
    )
}