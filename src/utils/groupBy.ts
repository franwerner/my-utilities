import isString from "@my-utilities/utils/isString"

type Callback<T, U> = (value: T)  => U

const groupBy = <T, U extends string>(array: T[], callback: Callback<T, U>) => {

    const groupedObject: Record<U, T[]> = {} as Record<U, T[]>;

    for (const i of array) {

        const key = callback(i)

        if (isString(key)) {

            const current = groupedObject[key]

            if (Array.isArray(current)) {
                groupedObject[key].push(i)
            } else {
                groupedObject[key] = [i]
            }

        }

    }

    return groupedObject
}

export default groupBy