const createUTCDate = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const date = new Date()
    hours && date.setUTCHours(date.getUTCHours() + hours)
    minutes && date.setUTCMinutes(date.getUTCMinutes() + minutes)
    seconds && date.setUTCSeconds(date.getUTCSeconds() + seconds)
    return date
}

export {createUTCDate}