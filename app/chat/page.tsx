"use client";

import { useState } from "react";
import { sendMessage } from "../../lib/api";
import { getToken } from "../../lib/auth";
import { getTenant } from "../../lib/tenant";

export default function Chat() {

    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState<any[]>([]);

    async function send() {

        try {

            const res = await sendMessage(
                msg,
                getToken() || undefined,
                getTenant()
            );

            setChat((prev) => [
                ...prev,
                { role: "user", text: msg },
                { role: "ai", text: res?.answer || "لا يوجد رد" }
            ]);

            setMsg("");

        } catch (err) {

            setChat((prev) => [
                ...prev,
                { role: "system", text: "حدث خطأ في الاتصال بالسيرفر" }
            ]);
        }
    }

    return (
        <div className="p-8">

            <h1 className="text-[#00D4FF]">
                AI Assistant
            </h1>

            <div className="space-y-3 mt-6">

                {chat.map((c, i) => (
                    <div key={i} className="card">
                        <b>{c.role}</b>: {c.text}
                    </div>
                ))}

            </div>

            <input
                className="mt-6 w-full p-3 bg-[#0F2A4A]"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="اكتب رسالتك..."
            />

            <button
                className="bg-[#00C27C] px-4 py-2 mt-3"
                onClick={send}
            >
                إرسال
            </button>

        </div>
    );
}
