"use client";

import { getPlan, setPlan } from "@/lib/billing";

export default function Billing() {

    function upgrade() {
        setPlan("pro");
        alert("تم الترقية إلى Pro");
    }

    return (
        <div className="p-8">

            <h1 className="text-[#00D4FF] text-xl">
                Billing
            </h1>

            <div className="card mt-6">

                <p>الخطة الحالية: {getPlan()}</p>

                <button
                    className="bg-[#00C27C] px-4 py-2 mt-4"
                    onClick={upgrade}
                >
                    Upgrade to Pro
                </button>

            </div>

        </div>
    );
}
