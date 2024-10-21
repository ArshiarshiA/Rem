"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdStarOutline } from "react-icons/md";
import { SwiperSlide, Swiper } from "swiper/react";
import { CiBookmark } from "react-icons/ci";

interface IGameGenreType {
    title: string,
    selectedGenre: string
}

interface allGamesData {
    id: number,
    title: string,
    image: string,
    rem: number,
    genres: any[]
}

type allGamesType = allGamesData[]

export default function GenreSection({ title, selectedGenre }: IGameGenreType) {

    let [allGames, setAllGames] = useState<allGamesType | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setAllGames(data))
    }, [])

    return (
        <div className="py-10">
            <Link className="flex items-center text-4xl border-l-4 border-l-yellow-600 pl-3 w-fit mb-5" href={`/games/genres/${title}`}>
                {title}
                <FaAngleRight />
            </Link>
            <div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                >
                    {allGames?.filter(game => game.genres[game.genres.findIndex(genre => genre === selectedGenre)] === selectedGenre)
                        .map(filteredGame => (
                            <SwiperSlide>
                                <div>
                                    <img className="h-[300px] object-cover object-center rounded-xl" src={filteredGame.image} alt="" />
                                    <div className="py-3">
                                        <h1 className="text-2xl capitalize">{filteredGame.title}</h1>
                                        <div className="flex items-center gap-1 py-2">
                                            <MdStarOutline className="text-yellow-600" size={20} />
                                            {filteredGame.rem}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Link className="mt-2 px-2 border-r border-r-yellow-600 border-l border-l-yellow-600" href={`/games/${filteredGame.id}`}>Detail</Link>
                                            <CiBookmark size={25} className="cursor-pointer text-white" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}