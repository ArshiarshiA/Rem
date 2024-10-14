import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { IoGameController } from "react-icons/io5";

export default function PlayList() {

    let [addToPlay, setAddToPlay] = useState<number>(0)

    return (
        <div className="flex items-center gap-2">
            <IconButton className="text-white">
                <Badge badgeContent={addToPlay} color="primary" showZero>
                    <IoGameController size={25} color="action" />
                </Badge>
            </IconButton>
            <p>Game List</p>
        </div>
    )
}