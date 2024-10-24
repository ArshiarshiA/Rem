import GenreSection from "@/src/components/genreSection/genreSection";
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
    return (
        <section className="p-10">
            <div className="text-white max-w-[1400px] m-auto">
                <div className="relative">
                    <Image className="h-[350px] object-cover m-auto brightness-[0.3] rounded-xl" src={allGenreBackground} alt="allGenreBackground" />
                    <h1 className="capitalize absolute w-full text-center top-32 text-6xl text-white max-[595px]:text-3xl">Browse all of your fav genre just in one page..!</h1>
                </div>
                <GenreSection title="shooter" selectedGenre="shooter" />
                <GenreSection title="horror" selectedGenre="horror" />
                <GenreSection title="Survival-horror" selectedGenre="Survival-horror" />
                <GenreSection title="fantasy" selectedGenre="fantasy" />
                <GenreSection title="adventure" selectedGenre="adventure" />
                <GenreSection title="shooter" selectedGenre="shooter" />
            </div>
        </section>
    )
}