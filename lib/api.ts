export async function sendMessage(message: string, token?: string, tenantId?: string) {

    const res = await fetch("https://YOUR-RENDER-URL/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
            "x-tenant-id": tenantId || ""
        },
        body: JSON.stringify({ message })
    });

    return res.json();
}
