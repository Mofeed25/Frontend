export function setTenant(id: string) {
    localStorage.setItem("tenant_id", id);
}

export function getTenant() {
    return localStorage.getItem("tenant_id") || "default";
}
