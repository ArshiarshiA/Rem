import FilterGame from "./component/filterGame";

export default function GameInfoPage({ params }: { params: { game: string } }) {
    return (
        <section className='pt-20'>
            <div className="max-w-[1400px] m-auto">
                <FilterGame uniqueId={params.game} />
            </div>
        </section>
    )
}