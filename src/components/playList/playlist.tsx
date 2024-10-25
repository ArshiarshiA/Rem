import { Badge, IconButton, } from "@mui/material";
import { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { gamesObgData } from "../sliders/EntrygameSlider/gameSlider";


export default function PlayList() {

    const [addToPlay, setAddToPlay] = useState<gamesObgData[]>([])

    const showZero = () => setAddToPlay([])

    return (
        <IconButton className="text-white flex items-center gap-2">
            <Badge badgeContent={addToPlay.length} color="primary" showZero>
                <IoGameController onClick={showZero} size={25} color="white" />
            </Badge>
            <p className="text-white text-base">Game List</p>
        </IconButton>
    )
}