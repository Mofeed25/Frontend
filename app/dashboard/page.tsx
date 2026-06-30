"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import KPI from "../../components/KPI";
import { sendMessage } from "../../lib/api";
import { getTenant } from "../../lib/tenant";

export default function Dashboard() {

    const [data, setData] = useState<any>(null);

    useEffect(() => {

        async function load() {

            const res = await sendMessage(
                "تحليل مالي شامل",
                undefined,
                getTenant()
            );

            setData(res?.answer?.financial || {});
        }

        load();

    }, []);

    return (
        <ProtectedRoute>

            <div style={{ padding: 24 }}>

                <h1>SolarMindAI Dashboard</h1>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>

                    <KPI title="الإيرادات" value={data?.revenue || 0} />
                    <KPI title="الربح" value={data?.profit || 0} />
                    <KPI title="الدوران" value={data?.turnover || 0} />

                </div>

            </div>

        </ProtectedRoute>
    );
}
