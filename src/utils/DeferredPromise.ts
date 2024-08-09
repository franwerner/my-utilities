interface IDeferredPromise<T = any, U = any> {
    resolve: ((value?: T) => void)
    reject: ((reason?: U) => void)
    instance: (Promise<T>)
    state?: "fullfilled" | "pending" | "reject"
}

class DeferredPromise<T = any, U = any> implements IDeferredPromise<T, U> {

    resolve: IDeferredPromise<T>["resolve"]
    reject: IDeferredPromise<U>["reject"]
    instance: IDeferredPromise<T>["instance"]
    state?: IDeferredPromise<T>["state"]

    constructor() {
        this.resolve = () => { }
        this.reject = () => { }
        this.state = "pending"
        this.instance = this.generatePromise()
    }

    private generatePromise() {
        const promise = new Promise<T>((res, rej) => {
            this.resolve = (value?: T) => {
                this.state = "fullfilled"
                res(value as T)
            }
            this.reject = (reason?: U) => {
                this.state = "reject"
                rej(reason)
            }
        })
        return promise
    }

}

export { type IDeferredPromise }
export default DeferredPromise