"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import KPI from "../../components/KPI";
import { sendMessage } from "../../lib/api";
import { getTenant } from "../../lib/tenant";

export default function Dashboard() {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {

            try {

                const res = await sendMessage(
                    "تحليل مالي شامل",
                    undefined,
                    getTenant()
                );

                setData(res);

            } catch (err) {

                setData({
                    answer: {
                        financial: {
                            "إجمالي الإيرادات (المبيعات)": 0,
                            "إجمالي صافي الأرباح": 0,
                            "معدل دوران المخزون (Turnover Ratio)": 0
                        }
                    }
                });

            } finally {
                setLoading(false);
            }
        }

        load();

    }, []);

    return (
        <ProtectedRoute>

            <div className="p-8">

                <h1 className="text-[#00D4FF] text-2xl">
                    Dashboard
                </h1>

                {loading ? (
                    <p className="text-gray-400 mt-6">جاري تحميل البيانات...</p>
                ) : (
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
                )}

            </div>

        </ProtectedRoute>
    );
}
