
 type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1] }
  : { [key in string]: any }

 type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>

type Entries<T> = [keyof T, T[keyof T]][]

type Keys<T> = Array<keyof T>


declare global {
  interface ObjectConstructor {
    fromEntries<T>(array: T): FromEntriesWithReadOnly<T>,
    entries<T>(obj: T): Entries<T>
    keys<T>(obj: T): Keys<T>
  }
}
