export type RequiredAllProperties<T> = { [K in keyof T]-?: T[K] }
