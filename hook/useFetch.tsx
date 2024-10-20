import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url:string){

    let [data , setData] = useState<null | object[]>(null)

    useEffect(() => {
        axios
        .get(`http://localhost:3001/${url}`)
        .then(response => response.data)
        .then(data => setData(data))
    } , [])

    return data
}