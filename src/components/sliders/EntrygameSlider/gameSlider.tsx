"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { PiPaintBrush } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import 'swiper/css'
import 'swiper/css/navigation'
import './navi.css'
import useFetch from "@/src/hook/useFetch";

export interface gamesObgData {
    id: number,
    art: boolean,
    title: string,
    image: string,
    rem: number
}

type gamesArray = gamesObgData[]

export default function EntryGameSlider() {

    let gameListSlide = useFetch('EntryGames')

    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            spaceBetween={20}
            autoplay={true}
            loop={true}
        >
            {
                gameListSlide?.filter(game => Number(game.id) <= 4).map(item => (
                    <SwiperSlide className="w-6/12 rounded-lg">
                        <div className="relative h-[450px]">
                            <div className="absolute top-0 left-0 text-white bg-[#49494970] rounded-lg">
                                <IoAddSharp size={50} />
                            </div>
                            {item.art && (
                                <div className="absolute top-0 right-0 flex items-center justify-center bg-green-500 w-9 h-9 rounded-lg">
                                    <Tooltip title='GAME IS ART' >
                                        <IconButton>
                                            <PiPaintBrush color="white" size={25} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            )}
                            <img className="rounded-lg h-full w-full object-cover" src={item.image} alt="" />
                            <div className="absolute bottom-0 w-full h-28 bg-[#000000a4] text-white px-5 py-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-5xl uppercase">{item.title}</h1>
                                        <div className="p-1 mt-2 rounded text-black bg-yellow-600 max-w-fit">
                                            <p><span className="font-extrabold">REM</span> : {item.rem}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="p-1 flex items-center">
                                            <Link href={`/games/${item.id}`}>See More</Link>
                                            <FaAngleRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}