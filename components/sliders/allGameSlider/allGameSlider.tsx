"use client"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gamesObgData } from "../EntrygameSlider/gameSlider";
import GameCard from "@/components/gameCard/gameCard";
import axios from "axios";

export default function AllGameSlider() {

    let [allGames, setAllGames] = useState<gamesObgData[] | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setAllGames(data))
    }, [])

    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={20}
        >
            {allGames?.filter(game => game.id <= 15).map(
                filteredGame => (
                    <SwiperSlide className="border border-[#cecece2d]">
                        <GameCard {...filteredGame} />
                    </SwiperSlide>
                )
            )}
        </Swiper>
    )
}