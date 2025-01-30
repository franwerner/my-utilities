export function isObject(type: any): type is object {
    return type !== null && typeof type === "object" && !Array.isArray(type)
}

