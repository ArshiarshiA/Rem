"use client"
import axios from "axios";
import { useEffect, useState } from "react";

interface IDetailT{
    information: string
    directors: string
    release: number
}

interface IGT {
    id?: string
    title?: string
    rem?: number
    image?: string
    art?: boolean
    genres?: string[]
    detail?: IDetailT
    name?: string
    fieldes: string[]
}

export default function useFetch(url: string) {

    const [data, setData] = useState<null | IGT[]>(null)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/${url}`)
            .then(response => response.data)
            .then(data => setData(data))
    }, [])

    return data
}