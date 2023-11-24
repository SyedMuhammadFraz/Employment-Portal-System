"use client";

import Link from "next/link";
import { useState } from "react";
 import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#F3F2EF] ">
            <div className="shadow-lg p-5 rounded-lg border-t-4 w-[400px] bg-white border-blue-500">
                <h1 className="text-xl font-semibold my-4 text-gray-500">Login</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)} 
                        type="text"
                        placeholder="Email"
                        className="border px-4 py-2 rounded-md"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="border px-4 py-2 rounded-md"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md text-white font-bold cursor-pointer px-6 py-2">
                        Login
                    </button>
                    {error && (
                        <div className="text-red-500  w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/register"}>
                        Don't have an account?  <span className="underline text-blue-700">Register</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
