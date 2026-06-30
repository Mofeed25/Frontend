const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://backened-ilnu.onrender.com";

export async function sendMessage(
    message: string,
    token?: string,
    tenantId?: string
) {
    try {

        const res = await fetch(`${BASE_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { "Authorization": `Bearer ${token}` } : {}),
                ...(tenantId ? { "x-tenant-id": tenantId } : {})
            },
            body: JSON.stringify({ message })
        });

        if (!res.ok) {
            return {
                status: "error",
                message: `Server Error: ${res.status}`
            };
        }

        return await res.json();

    } catch (error) {

        return {
            status: "error",
            message: "Network error or backend unreachable"
        };
    }
}
