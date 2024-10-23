import AllGame from "./component/allGame";

export default function Games() {
    return (
        <main className="py-10 px-5 text-white">
            <div className="max-w-[1400px] m-auto">
                <h1 className="text-4xl">All Games - REM</h1>
                <AllGame />
            </div>
        </main>
    )
}