export type StrictObject<T> = T extends object ? (T extends any[] ? never : T) : never; //=>Verifica que sea un objecto literal.
