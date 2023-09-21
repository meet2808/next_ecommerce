'use client'
import { Input } from "@/components";
import Link from "next/link";

const SignUp = () => {
    return (
        <>
            <div className="my-10 mx-auto w-[400px] px-[5px] py-[10px]">
                <h1 className="text-[30px] font-bold uppercase text-center">Sign Up</h1>

                <div className="py-1">
                    <Input type={"text"} name="name" label="Name" errors={"Please enter your Name"} value={"Meet"} placeholder={"Name"} hasError={false} />

                    <Input type={"email"} name="email" label="Email" errors={"Please enter your email"} value={""} placeholder={"Email"} hasError={false} />

                    <Input type={"password"} name="password" label="Password" errors={"Please enter your password"} value={"123"} placeholder={"Password"} hasError={false} />

                    <Input type={"password"} name="cp" label="Confirm Password" errors={"Please re-enter your password"} value={"123"} placeholder={"Re-enter Password"} hasError={false} />
                </div>

                <button className="bg-slate-900 h-12 w-full text-white uppercase border hover:text-slate-900 hover:border-slate-900 hover:bg-transparent hover:ease-in-out hover:delay-10">Sign Up</button>
                <span className="text-neutral-600 text-[15px]">Already have an account?<Link href="/sign-in">Sign In</Link></span>
            </div>
        </>
    )
}

export default SignUp;