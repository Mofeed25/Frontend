const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function sendMessage(message: string, token?: string, tenantId?: string) {

    const res = await fetch(`${BASE_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(tenantId ? { "x-tenant-id": tenantId } : {})
        },
        body: JSON.stringify({ message })
    });

    return res.json();
}
