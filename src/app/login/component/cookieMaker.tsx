import { cookies } from "next/headers"

export default function CookieMaker({username , password} : {username:string , password:string}){

    const cookie = cookies()

    const loginHandler = () => {
        if (username === '' || password === '') return
        else {
            cookie.set('username' , `${username}` , {expires: new Date('00-00-2025')})
            // router.push('/')
            // router.refresh()
        }
    }

    return(
        <button type="button" onClick={loginHandler} className="w-full text-center bg-yellow-600 rounded-xl py-1">Login</button>
    )
}