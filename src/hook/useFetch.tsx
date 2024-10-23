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
}

export default function useFetch(url: string) {

    let [data, setData] = useState<null | IGT[]>(null)
    let [isLoad, setIsLoad] = useState<boolean>(true)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/${url}`)
            .then(response => response.data)
            .then(data => {
                setData(data)
                setIsLoad(false)
            })
    }, [])

    return data
}