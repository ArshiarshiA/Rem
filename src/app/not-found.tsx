import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-20 px-10">
            <div className="flex justify-center pt-20">
                <div className="relative w-[500px] h-52 border-2 border-white rounded-lg">
                    <div className="absolute -top-24 right-0 w-[2px] h-32 bg-white">
                        <div className="absolute -top-10 -right-5 w-10 h-10 rounded-full border"></div>
                    </div>
                    <div className="absolute -top-24 left-0 w-[2px] h-32 bg-white">
                        <div className="absolute -top-10 -right-5 w-10 h-10 rounded-full border"></div>
                    </div>
                    <h1 className="absolute text-white w-full text-center -top-[123px] text-9xl">404</h1>
                    <div className="absolute right-20 top-5 w-20 h-20 rounded-full">
                        <div className="absolute right-10 -top-1 w-[2px] h-20 bg-yellow-600 rotate-45"></div>
                        <div className="absolute left-10 -top-1 w-[2px] h-20 bg-yellow-600 -rotate-45"></div>
                    </div>
                    <div className="absolute left-20 top-5 w-20 h-20 rounded-full">
                        <div className="absolute right-10 -top-1 w-[2px] h-20 bg-yellow-600 rotate-45"></div>
                        <div className="absolute left-10 -top-1 w-[2px] h-20 bg-yellow-600 -rotate-45"></div>
                    </div>
                    <div className="flex justify-center h-full items-end">
                        <div className="flex w-56 h-20 border-2">
                            <div className="border-r w-3/12 h-full"></div>
                            <div className="border-r w-3/12 h-full"></div>
                            <div className="border-r w-3/12 h-full"></div>
                            <div className="border-r w-3/12 h-full"></div>
                        </div>
                    </div>
                    <div className="text-white text-center">
                        <h1 className="text-4xl py-5 capitalize">I think this is not exist... :(</h1>
                        <Link className="bg- bg-yellow-600 mt-5 px-6 py-1 rounded-md" href={'/'}>Get Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}