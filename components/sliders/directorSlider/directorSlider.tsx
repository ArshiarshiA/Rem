"use client"
// import { Swiper } from "swiper/react";
import { useState, useEffect } from 'react'
import axios from "axios";
import Link from 'next/link';
import { HiOutlinePaintBrush } from "react-icons/hi2";


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

    let [directors, setDirectors] = useState<directorsArray | null>(null)

    useEffect(() => {
        axios
            .get('http://localhost:3001/directors')
            .then(response => response.data)
            .then(data => setDirectors(data))
    }, [])

    return (
        <div className="flex flex-col gap-5">
            {directors?.map(item => (
                <div key={item.id} className="flex gap-3 text-white">
                    <div className="w-4/12 h-44">
                        <img className="object-cover rounded-xl w-full h-full" src={item.image} alt="" />
                    </div>
                    <div className="w-6/12">
                        <h1 className="text-lg uppercase border-l border-l-yellow-600 pl-1">Name : {item.name}</h1>
                        <h1>Born : {item.born}</h1>
                        <div className="flex gap-5">
                            {item.fieldes.map(field => (
                                <div>
                                    <p className="text-gray-400 border-b border-b-yellow-600">{field}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='flex items-center gap-1'>
                                <HiOutlinePaintBrush />
                                <h1 className='pr-2 text-green-500'>work of arts : </h1>
                            </div>
                            {item.work.map(work => (
                                <div className='pr-3'>
                                    {work}
                                </div>
                            ))}
                        </div>
                        <button className='bg-yellow-600 p-1 mt-4 rounded-lg text-black'>
                            <Link href={`/directors/${item.name}`}>know more</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}