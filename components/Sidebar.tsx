export default function Sidebar() {

    return (
        <div className="w-64 bg-[#0F2A4A] p-6">

            <h1 className="text-[#00D4FF] text-xl font-bold">
                SolarMind AI
            </h1>

            <nav className="mt-8 space-y-3 text-sm">

                <a href="/dashboard">📊 Dashboard</a>
                <a href="/chat">🤖 AI Chat</a>
                <a href="/analytics">📈 Analytics</a>
                <a href="/billing">💳 Billing</a>
                <a href="/settings">⚙️ Settings</a>

            </nav>

        </div>
    );
}
