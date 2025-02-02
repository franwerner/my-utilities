
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y

type FromEntriesType<T> = T extends [infer Key, any][]
    ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1] }
    : { [key in string]: any }

export type FromEntries<T> = FromEntriesType<DeepWriteable<T>>

