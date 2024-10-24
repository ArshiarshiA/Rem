import logo from '@/public/img/igdblogo.png'
import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className='pt-20'>
            <div className="text-white max-w-[800px] m-auto">
                <div>
                    <a href="/">
                        <Image className='w-32 m-auto rounded-lg' src={logo} alt="" />
                    </a>
                    <div className='text-2xl text-center border border-gray-600 rounded-md w-fit m-auto p-5 mt-4'>
                        <h1>follow REM in social</h1>
                        <div className='flex justify-center gap-2 pt-4'>
                            <a href="#">
                                <FaInstagram className='hover:text-pink-600 transition-all' />
                            </a>
                            <a href="#">
                                <FaYoutube className='hover:text-red-600 transition-all' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center p-7'>
                    <ul className="flex justify-center items-center flex-wrap gap-5">
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                        <li className='w-3/12'>
                            <Link href={'#'}>just a link</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-t-gray-600 text-gray-600 p-2'>
                <div className='max-w-[900px] m-auto flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <p>All right reserved for <span className='border-b border-b-yellow-600 text-yellow-600'>REM</span>.2024</p>
                        <FaRegCopyright />
                    </div>
                    <div>
                        <p>Developer : <a className='underline' href="https://github.com/ArshiarshiA">Arshia Mansury</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}