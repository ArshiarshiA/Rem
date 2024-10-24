import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function LoginIcon() {

    let usernameCookie = document.cookie?.split('=')[1]
    let router = useRouter()

    const deleteUser = () => {
        document.cookie = `username=${usernameCookie}; expires=Thu, 18 Dec 1970 12:00:00 UTC`
        router.refresh()
    }

    return (
        document.cookie == `username=${usernameCookie}` ? (
            <>
                <CiLogout onClick={deleteUser} className="cursor-pointer" size={30} />
            </>
        ) : (
            <Link href={'/login'}>
                <FaUser className="cursor-pointer" size={25} />
            </Link>
        )
    )
}