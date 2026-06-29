export function getPlan() {
    return localStorage.getItem("plan") || "free";
}

export function setPlan(plan: string) {
    localStorage.setItem("plan", plan);
}

export function isPro() {
    return getPlan() === "pro";
}
