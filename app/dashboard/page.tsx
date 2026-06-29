"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import KPI from "@/components/KPI";
import { sendMessage } from "@/lib/api";
import { getTenant } from "@/lib/tenant";

export default function Dashboard() {

    const [data, setData] = useState<any>(null);

    useEffect(() => {

        async function load() {

            const res = await sendMessage(
                "تحليل مالي شامل",
                undefined,
                getTenant()
            );

            setData(res);

        }

        load();

    }, []);

    return (
        <ProtectedRoute>

            <div className="p-8">

                <h1 className="text-[#00D4FF] text-2xl">
                    Dashboard
                </h1>

                <div className="grid grid-cols-3 gap-6 mt-6">

                    <KPI
                        title="الإيرادات"
                        value={data?.answer?.financial?.["إجمالي الإيرادات (المبيعات)"] || 0}
                    />

                    <KPI
                        title="الربح"
                        value={data?.answer?.financial?.["إجمالي صافي الأرباح"] || 0}
                    />

                    <KPI
                        title="الدوران"
                        value={data?.answer?.financial?.["معدل دوران المخزون (Turnover Ratio)"] || 0}
                    />

                </div>

            </div>

        </ProtectedRoute>
    );
}
