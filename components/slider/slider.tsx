"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { PiTreeBold } from "react-icons/pi";import 'swiper/css/navigation'
import 'swiper/css'
import { IconButton, Tooltip } from "@mui/material";

interface gamesObgData {
    id: string,
    art: boolean,
    title: string,
    image: string,
    rem: number
}

type gamesArray = gamesObgData[]

export default function Slider() {

    let [gameListSlide, setGameListSlide] = useState<gamesArray | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/games')
            .then(response => response.data)
            .then(data => setGameListSlide(data));
    }, [])

    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
        >
            {gameListSlide?.map(item => (
                <SwiperSlide className="w-6/12 rounded-lg">
                    <div className="relative">
                        {item.art && (
                            <div className="absolute top-0 right-0 flex items-center justify-center bg-green-500 w-9 h-9 rounded-lg">
                                <IconButton>
                                    <Tooltip title='GAME IS ART' placement="bottom-start">
                                        <PiTreeBold color="white" size={25} />
                                    </Tooltip>
                                </IconButton>
                            </div>
                        )}
                        <img className="rounded-lg h-full w-full" src={item.image} alt="" />
                        <div className="absolute bottom-0 w-full h-20 bg-[#07070784] text-white p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl">{item.title}</h1>
                                    <p>director : Sam Lake</p>
                                </div>
                                <div className="flex items-center justify-center p-1 h-10 w-10 rounded-full bg-blue-600">
                                    {item.rem}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}