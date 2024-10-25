'use client'
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCopyright, FaInstagram, FaLock, FaUser, FaYoutube } from "react-icons/fa6";
import CookieMaker from "./cookieMaker";

export default function LoginForm({children}: {children:React.ReactNode}) {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    return (
        <div className="max-w-[350px] m-auto bg-white rounded-md p-5">
            <div>
                <h1 className="w-full text-center text-4xl">Login</h1>
                <form className="py-5" action="">
                    <div className="py-2">
                        <label htmlFor="">Username</label>
                        <div className="relative">
                            <input onChange={usernameHandler} placeholder="Type Your User Name" className="relative border-b border-b-black pb-1 w-full outline-none pl-6 mt-2" type="text" />
                            <FaUser className="absolute left-0 top-3" />
                        </div>
                    </div>
                    <div className="py-2">
                        <label htmlFor="">Password</label>
                        <div className="relative">
                            <input onChange={passwordHandler} placeholder="Type Your Password" className="border-b border-b-black pb-1 w-full outline-none pl-6 mt-2" type="password" />
                            <FaLock className="absolute left-0 top-3" />
                        </div>
                    </div>
                    {children}
                </form>
                <div className="text-center py-5">
                    <p>Follow Us In Social</p>
                    <div className="flex justify-center gap-2 py-2">
                        <a href="">
                            <FaInstagram className="text-pink-600" size={30} />
                        </a>
                        <a href="">
                            <FaTelegramPlane className="text-blue-500" size={30} />
                        </a>
                        <a href="">
                            <FaYoutube className="text-red-600" size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-black border-t border-t-black text-center pt-5">
                <p className="flex justify-center items-end gap-1">Copy right 2024 <FaCopyright /></p>
                <p className="text-yellow-600">Rem</p>
            </div>
        </div >
    )
}