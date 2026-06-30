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

            <h1 style={{ color: "#00D4FF", fontSize: 22 }}>
                SolarMindAI Assistant
            </h1>

            <p style={{ opacity: 0.7 }}>
                مرحباً بك، أنا مستشارك المالي والإداري الذكي
            </p>

            <div style={{ marginTop: 20 }}>
                {chat.map((c, i) => (
                    <div key={i} className="card" style={{ marginBottom: 10 }}>
                        <b>{c.role}</b>: {c.text}
                    </div>
                ))}
            </div>

            <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="اكتب سؤالك..."
                style={{
                    width: "100%",
                    padding: 12,
                    marginTop: 20,
                    background: "#0B1220",
                    border: "1px solid #1C2A3A",
                    color: "white"
                }}
            />

            <button
                onClick={send}
                style={{
                    marginTop: 12,
                    background: "#00C27C",
                    padding: "10px 20px"
                }}
            >
                إرسال
            </button>

        </div>
    );
}
