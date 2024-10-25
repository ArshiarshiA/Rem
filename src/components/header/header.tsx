"use client"
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Logo from '@/public/img/igdblogo.png'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GiGothicCross } from "react-icons/gi";
import PlayList from "../playList/playlist";
import LoginIcon from "../loginIcon/loginIcon";


export default function Header() {

    const [inputValue, setInputValue] = useState<string>('')

    const [checkIsEmpty, SetCheckIsEmpty] = useState<boolean>(false)

    const checkIsTexted = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if(e.target.value.length > 0) SetCheckIsEmpty(true)
        else SetCheckIsEmpty(false)
    }

    const clearInput = () => {
        setInputValue('')
        SetCheckIsEmpty(false)
    }

    return (
        <nav className="bg-[#1a1a1a]">
            <div className="max-w-[1500px] m-auto px-6 py-5">
                <div className="flex items-center gap-5 text-white">
                    <a href="/">
                        <Image className="w-32 rounded-lg" src={Logo} alt="logo" />
                    </a>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <p className="text-xl">MENU</p>
                        <FiMenu />
                    </div>
                    <div className="w-7/12 relative max-[571px]:hidden">
                        <input value={inputValue} onChange={checkIsTexted} type="text" placeholder="search your fav game..." className="rounded-lg p-2 w-full bg-gray-500 outline-none" />
                        <CiSearch className="absolute right-2 top-2 size-6" />
                        {checkIsEmpty && (
                            <GiGothicCross onClick={clearInput} className="absolute right-10 cursor-pointer top-2 size-6 transition-all" />
                        )}
                    </div>
                    <PlayList />
                    <LoginIcon />
                </div>
            </div>
        </nav>
    )
}