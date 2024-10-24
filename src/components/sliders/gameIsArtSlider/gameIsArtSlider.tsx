"use client"
import { useEffect, useState } from "react";
import { gamesObgData } from "../EntrygameSlider/gameSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Link from "next/link";
import { Autoplay } from 'swiper/modules'

export default function GameIsArtSlider() {

    let [artGames, setArtGames] = useState<null | gamesObgData[]>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setArtGames(data))
    }, [])

    return (
        <Swiper
            breakpoints={{
                600:{
                    slidesPerView: 3
                },
                500:{
                    slidesPerView: 2
                }
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
        >
            {
                artGames?.filter(item => item.art === true)
                    .map(art => (
                        <SwiperSlide>
                            <Link href={`/games/${art.id}`}>
                                <div className="py-9">
                                    <div className="text-white uppercase">
                                        <img className="w-52 h-52 object-cover rounded-full max-[500px]:rounded-xl max-[500px]:w-full" src={art.image} alt="" />
                                        <div className="text-center pt-3">
                                            <h1>{art.title}</h1>
                                        </div>
                                        <div className="px-5 pt-2">
                                            <div className="bg-yellow-600 px-2 rounded-full text-black w-fit">
                                                Rem : {art.rem}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
            }
        </Swiper>
    )
}