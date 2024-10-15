"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { gamesObgData } from "@/components/sliders/EntrygameSlider/gameSlider"
import { IconButton, Tooltip } from "@mui/material"
import { PiPaintBrush } from "react-icons/pi";
import axios from "axios"
import { IoAddOutline } from "react-icons/io5";

export default function Games() {

    let [allGamesPage, setAllGamePages] = useState<null | gamesObgData[]>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setAllGamePages(data))
    }, [])

    return (
        <main className="py-10 px-5 text-white">
            <div className="max-w-[1400px] m-auto">
                <h1 className="text-4xl">All Games - REM</h1>
                <div className="flex justify-center flex-wrap">
                    {allGamesPage?.map(game => (
                        <div className="w-3/12 p-5">
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
                                <div>
                                    <p><span className="text-yellow-600">REM</span> : {game.rem}</p>
                                </div>
                                <h1 className="my-2 text-lg capitalize">{game.title}</h1>
                                <div className="flex items-center justify-between">
                                    <Link className="border-l border-l-yellow-600 pl-2 border-r border-r-yellow-600 pr-2" href={`/games/${game.title}`}>Deatail</Link>
                                    <Tooltip title='add to your play list' >
                                        <IconButton>
                                            <IoAddOutline size={25} className="cursor-pointer text-white" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}