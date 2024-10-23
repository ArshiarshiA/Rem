import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { CiBookmark, CiStar } from "react-icons/ci";
import { PiPaintBrush } from "react-icons/pi";

interface IDgameCard {
    children: React.ReactNode
    id?: string
    title?: string
    rem?: number
    image?: string
    art?: boolean
    genres?: string[]
    release?: number
    directors?: string
    information?: string
}

export default function DetailGameCard({ art, title, image, rem, children, directors, information, release }: IDgameCard) {
    return (
        <>
            <div className="w-1/3">
                <div className="relative">
                    <img className="w-full h-[500px] object-cover rounded-lg" src={image} alt="" />
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
                <div className="flex justify-between py-5">
                    <button className="flex items-center gap-2 bg-[#68686857] px-5 py-1 rounded-full">Add To Your List <CiBookmark className="cursor-pointer" size={25} /></button>
                    <span className="flex items-center gap-1"><CiStar size={25} className="text-yellow-600" /> {rem}</span>
                </div>
            </div>
            <div className="w-1/2 max-h-[500px] px-5 flex flex-col justify-between">
                <div>
                    <div className="border-b pb-2">
                        <h1 className="text-3xl capitalize">{title}</h1>
                        <p className="text-gray-500">{release}</p>
                        <p className="text-2xl mt-2 capitalize">Director : {directors}</p>
                    </div>
                    <div className="py-7 text-2xl text-justify">
                        <p>{information}</p>
                    </div>
                </div>
                <div className="pt-10 flex gap-3">
                    {children}
                </div>
            </div>

        </>
    )
}