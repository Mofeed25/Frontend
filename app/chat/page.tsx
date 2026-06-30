"use client";

import { useState } from "react";
import { sendMessage } from "../../lib/api";
import { getToken } from "../../lib/auth";
import { getTenant } from "../../lib/tenant";

export default function Chat() {

    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState<any[]>([]);

    async function send() {

        if (!msg.trim()) return;

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
    }

    return (
        <div style={{ padding: 24 }}>

            <h1>SolarMindAI Assistant</h1>

            <div>
                {chat.map((c, i) => (
                    <div key={i}>
                        <b>{c.role}</b>: {c.text}
                    </div>
                ))}
            </div>

            <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="اكتب رسالة..."
            />

            <button onClick={send}>إرسال</button>

        </div>
    );
}
