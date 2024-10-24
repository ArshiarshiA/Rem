import { Badge, IconButton, } from "@mui/material";
import { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { gamesObgData } from "../sliders/EntrygameSlider/gameSlider";


export default function PlayList() {

    let [addToPlay, setAddToPlay] = useState<gamesObgData[]>([])

    return (
        <IconButton className="text-white flex items-center gap-2">
            <Badge badgeContent={addToPlay.length} color="primary" showZero>
                <IoGameController size={25} color="white" />
            </Badge>
            <p className="text-white text-base">Game List</p>
        </IconButton>
    )
}