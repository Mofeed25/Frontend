import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: any) {

    return (
        <html>
            <body>
                <div className="flex min-h-screen">
                    <Sidebar />
                    <div className="flex-1">{children}</div>
                </div>
            </body>
        </html>
    );
}
