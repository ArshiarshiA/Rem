"use client"
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { PiPaintBrush } from "react-icons/pi";

interface gameCardProps {
    image: string,
    title: string,
    rem: number,
    art: boolean
}

export default function GameCard({ art, image, rem, title }: gameCardProps) {
    return (
        <div>
            <div>
                <img className="w-full h-[200px] object-cover" src={image} alt="" />
                {art && (
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
                <h1 className="text-lg capitalize">{title}</h1>
                <div className="py-2">
                    <p><span className="text-yellow-600">REM</span> : {rem}</p>
                </div>
                <Link className="w-full border-l border-l-yellow-600 pl-2 border-r border-r-yellow-600 pr-2" href={`/games/${title}`}>Detail</Link>
            </div>
        </div>
    )
}