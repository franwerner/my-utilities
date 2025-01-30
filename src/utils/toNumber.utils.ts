const toNumber = (value: any) => {
    const number = Number(value)
    if (typeof value === "number" || !isNaN(number)) {
        return number
    } else {
        return 0
    }
}

export {toNumber}