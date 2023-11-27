"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate distance from the center
        const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

        // Set gradient position based on distance
        setGradientPosition({ x: distance, y: distance });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const gradientStyle = {
        background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px,  #1E90FF,#1D4ED8)`,
    };

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
        <motion.div

            className="flex items-center justify-center h-screen  "
            style={gradientStyle}

        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="shadow-lg p-5 rounded-lg border-t-4 w-[400px] bg-white border-blue-500"
            >
                <h1 className="text-xl font-semibold my-4 text-blue-600 text-center">
                    Login
                </h1>

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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md text-white font-bold cursor-pointer px-6 py-2"
                    >
                        Login
                    </motion.button>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2"
                        >
                            {error}
                        </motion.div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/register"}>
                        Don't have an account?{" "}
                        <span className="underline text-blue-700">Register</span>
                    </Link>
                </form>
            </motion.div>
        </motion.div>
    );
}
