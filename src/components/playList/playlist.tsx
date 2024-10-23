import { Badge, IconButton, } from "@mui/material";
import { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { gamesObgData } from "../sliders/EntrygameSlider/gameSlider";


export default function PlayList() {

    let [addToPlay, setAddToPlay] = useState<gamesObgData[]>([])

    return (
        <div className="flex items-center gap-2">
            <IconButton className="text-white">
                <Badge badgeContent={addToPlay.length} color="primary" showZero>
                    <IoGameController size={25} color="action" />
                </Badge>
            </IconButton>
            <p>Game List</p>
        </div>
    )
}