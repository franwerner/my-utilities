export function parseDate(dateStr: any) {
    const parsedDate = new Date(dateStr)
    return isNaN(parsedDate.getTime()) ? 0 : parsedDate
}

/**
 * Sirve para la comparacion correcta de las fechas.
 * Ya que si se ingresa una fecha invalida al comparar new Date() > new Date("invalid") = false.
 * en cambio si es new Date() > 0 = true
 */

