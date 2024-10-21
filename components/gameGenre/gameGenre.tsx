import Link from "next/link";

interface genresData {
    title: string, 
    background: string
}

export default function GameGenre({title, background }: genresData) {
    return (
        <div className="rounded-2xl">
            <Link href={`/games/genres/${title}`}>
                <div className="relative">
                    <img className="w-full h-[200px] object-cover rounded-2xl brightness-50 hover:brightness-[.2] transition-all" src={background} alt="" />
                    <h1 className="absolute top-10 text-white text-4xl w-full text-center uppercase">{title}</h1>
                </div>
            </Link>
        </div>
    )
}