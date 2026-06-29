"use client";

import { setToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    function login() {

        setToken("demo-token");
        router.push("/dashboard");

    }

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="card w-96">

                <h1>Login</h1>

                <button
                    className="bg-[#00C27C] px-4 py-2 mt-4 w-full"
                    onClick={login}
                >
                    دخول
                </button>

            </div>

        </div>
    );
}
