export function getTenant() {
    if (typeof window === "undefined") return "default";
    return localStorage.getItem("tenant_id") || "default";
}
