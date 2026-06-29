"use client";

import { useEffect } from "react";
import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: any) {

    const router = useRouter();

    useEffect(() => {

        if (!getToken()) {
            router.push("/login");
        }

    }, []);

    return children;
}
