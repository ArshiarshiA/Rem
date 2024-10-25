// import { ChangeEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";
import CookieMaker from "./component/cookieMaker";
import LoginForm from "./component/loginForm";

export default function Login() {
    return (
        <section className="py-20">
            <div className="max-w-[1400px] min-h-[400px] m-auto">
                <LoginForm>
                    <CookieMaker password={password} username={username} />
                </LoginForm>
            </div>
        </section>
    )
}