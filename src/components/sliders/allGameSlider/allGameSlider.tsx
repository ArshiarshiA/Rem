"use client"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gamesObgData } from "../EntrygameSlider/gameSlider";
import GameCard from "@/src/components/gameCard/gameCard";
import axios from "axios";

export default function AllGameSlider() {

    const [allGames, setAllGames] = useState<gamesObgData[] | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setAllGames(data))
    }, [])

    return (
        <Swiper
            slidesPerView={2}
            breakpoints={{
                1000:{
                    slidesPerView: 5
                },
                600:{
                    slidesPerView: 3
                }
            }}
            spaceBetween={20}
        >
            {allGames?.filter(game => game.id <= 15).map(
                filteredGame => (
                    <SwiperSlide key={filteredGame.id} className="border border-[#cecece2d]">
                        <GameCard {...filteredGame} />
                    </SwiperSlide>
                )
            )}
        </Swiper>
    )
}