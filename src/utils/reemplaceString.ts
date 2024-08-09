import  isString  from "./isString"

export type ReplaceTuple = [(RegExp | string), string]

/**
 * @description
 * 1. Esta utilidad lo que hace es reemplazar un/s strings coincidentes por una nueva..
 * 2. Es decir si del string "texto de texto" se encontraron 2 coincidades de "texto" las reemplazara ambas.
 */

const addGlobalFlag = (exp: RegExp) => {
    if (exp instanceof RegExp && !(exp.flags.includes("g"))) {
        return new RegExp(exp.source, exp.flags + "g")
    } else return exp
}

const replaceProcess = (value: string, replace: ReplaceTuple) => {

    const [exp, newStr] = Array.isArray(replace) ? replace : []

    const isRegExp = (() => {
        if (isString(exp)) return new RegExp(exp)
        else if (exp instanceof RegExp) return exp
    })()

    if (isString(value) && isString(newStr) && isRegExp) {
        return value.replace(addGlobalFlag(isRegExp), newStr)
    } else return value

}

export const replaceString = (value: string, replace: ReplaceTuple | ReplaceTuple[]) => {
    if (replace.every(Array.isArray)) {
        return replace.reduce((acc: string, current) => {
            return replaceProcess(acc, current as ReplaceTuple);
        }, value);
    } else if (Array.isArray(replace)) {
        return replaceProcess(value, replace as ReplaceTuple);
    }
};
