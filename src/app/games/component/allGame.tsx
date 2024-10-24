"use client"
import useFetch from "@/src/hook/useFetch"
import { IconButton, Tooltip } from "@mui/material"
import Link from "next/link"
import { CiBookmark } from "react-icons/ci"
import { PiPaintBrush } from "react-icons/pi"

export default function AllGame() {

    let allGamesPage = useFetch('EntryGames')

    return (
        <div className="flex justify-center flex-wrap">
            {allGamesPage?.map(game => (
                <div className="border-b border-gray-500 w-full min-[589px]:w-6/12 min-[840px]:w-3/12 p-5">
                    <div className="relative">
                        <img className="h-[150px] w-full object-cover rounded-lg" src={game.image} alt="" />
                        {game.art && (
                            <div className="absolute top-0 right-0 flex items-center justify-center bg-green-500 w-9 h-9 rounded-lg">
                                <Tooltip title='GAME IS ART' >
                                    <IconButton>
                                        <PiPaintBrush color="white" size={25} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        )}
                    </div>
                    <div className="py-2 px-2">
                        <h1 className="my-2 text-lg capitalize">{game.title}</h1>
                        <div>
                            <p><span className="text-yellow-600">REM</span> : {game.rem}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link className="border-l border-l-yellow-600 pl-2 border-r border-r-yellow-600 pr-2" href={`/games/${game.id}`}>Deatail</Link>
                            <CiBookmark size={25} className="cursor-pointer text-white" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}