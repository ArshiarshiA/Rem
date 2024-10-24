"use client"
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    let [username, setUsername] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let router = useRouter()

    const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const loginHandler = () => {
        if (username === '' || password === '') {
            return 
        } else {
            document.cookie = `username=${username}; expires=Thu, 18 Dec 2025 12:00:00 UTC `
            router.push('/')
            router.refresh()
        }
    }

    return (
        <section className="py-20">
            <div className="max-w-[1400px] min-h-[400px] m-auto">
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
                            <button type="button" onClick={loginHandler} className="w-full text-center bg-yellow-600 rounded-xl py-1">Login</button>
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
                </div>
            </div>
        </section>
    )
}