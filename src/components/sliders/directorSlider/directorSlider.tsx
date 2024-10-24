"use client"
import Link from 'next/link';
import useFetch from '@/src/hook/useFetch';

interface directorsData {
    id: number
    name: string,
    image: string,
    fieldes: string[],
    born: string,
    work: string[]
}

type directorsArray = directorsData[]

export default function DirectorSlider() {

    let directors = useFetch('directors')

    return (
        <div className="flex max-[938px]:flex-wrap flex-col max-[938px]:flex-row">
            {directors?.map((item) => (
                <div key={item.id} className="flex gap-3 py-3 max-[938px]:w-6/12 max-[718px]:w-full text-white">
                    <div className="w-4/12 h-44">
                        <img className="object-cover rounded-sm w-full h-full" src={item.image} alt="" />
                    </div>
                    <div className="w-6/12 flex flex-col justify-between">
                        <div>
                            <h1 className="text-lg uppercase border-l border-l-yellow-600 pl-1">Name : {item.name}</h1>
                            <div className="flex gap-5">
                                {item.fieldes.map(field => (
                                    <div>
                                        <p className="text-gray-400 border-b border-b-yellow-600">{field}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='bg-yellow-600 p-1 mt-4 w-fit rounded-sm text-black'>
                            <Link href={`/directors/${item.name}`}>know more</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}