const CreateIntialValue = <T extends object>(props?: Partial<T>) => {
    return Object.entries(props || {}) as Array<[keyof T, T[keyof T]]>
}

type Exception<T extends object, U = any> = (key: keyof T) => U
interface QuickStoreEntry<T extends object, U = any> {
    store?: Partial<T>,
    exception?: Exception<T,U>
}

class QuickStore<T extends object, U = any> {
    private data: Map<keyof T, T[keyof T]>
    private exception?: Exception<T,U>
    private static instance: QuickStore<any, any> | null = null

    constructor(props: QuickStoreEntry<T, U>) {
        this.data = new Map<keyof T, T[keyof T]>(CreateIntialValue(props.store))
        this.exception = props.exception
    }

    static create<T extends object, U = any>(props: QuickStoreEntry<T, U>): QuickStore<T, U> {
        if (this.instance) return this.instance
        return this.instance = new QuickStore<T, U>(props)
    }

    set<K extends keyof T>(key: K, value: T[K]) {
        this.data.set(key, value)
    }

    get<K extends keyof T>(key: K) {
        return this.data.get(key)
    }

    ensure<K extends keyof T>(key: K) {
        const data = this.data.get(key)
        if (!data) {
            if (this.exception) throw this.exception(key)
            else throw new Error(`QuickStore: Missing value for key "${String(key)}"`)
        }
        return data
    }

    delete<K extends keyof T>(key: K) {
        return this.data.delete(key)
    }

    has<K extends keyof T>(key: K) {
        return this.data.has(key)
    }

    clear() {
        this.data.clear()
    }
}

export { QuickStore }