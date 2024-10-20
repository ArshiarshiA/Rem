"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import GenreSection from "@/components/genreSection/genreSection";
import Image from "next/image";
import allGenreBackground from '@/public/img/allGameGenre.jpg'

interface allGamesData {
    id: number,
    title: string,
    image: string,
    rem: number,
    genres: any[]
}

type allGamesType = allGamesData[]

export default function Genres() {

    let [allGames, setAllGames] = useState<allGamesType | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/EntryGames')
            .then(response => response.data)
            .then(data => setAllGames(data))
    }, [])


    return (
        <section className="p-10">
            <div className="text-white max-w-[1400px] m-auto">
                <div className="relative">
                    <Image className="h-[500px] object-cover m-auto brightness-[0.3] rounded-xl" src={allGenreBackground} alt="allGenreBackground" />
                    <h1 className="capitalize absolute w-full text-center top-20 text-6xl text-white">Browse all of your fav genre just in one page..!</h1>
                </div>
                <GenreSection title="shooter" selectedGenre="shooter" />
                <GenreSection title="horror" selectedGenre="horror" />
                <GenreSection title="shooter" selectedGenre="shooter" />
                <GenreSection title="shooter" selectedGenre="shooter" />
                <GenreSection title="shooter" selectedGenre="shooter" />
                <GenreSection title="shooter" selectedGenre="shooter" />
            </div>
        </section >
    )
}