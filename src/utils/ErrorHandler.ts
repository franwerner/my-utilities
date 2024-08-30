import color from "chalk"

interface ErrorHandlerProps {
    message?: string
    name?: string
    code?: string | number
}

class ErrorHandler extends Error {

    code?: string | number;

    constructor({
        message = "",
        name = "",
        code
    }: ErrorHandlerProps) {
        super()
        this.code = code
        this.message = message
        this.name = name
    }

    log() {
        const isCode = (typeof this.code === "number" || typeof this.code === "string") ? `${color.red("Code")}: (${this.code})\n` : ""

        const cleanStack = this.stack?.replace(this.name + ": " + this.message,"")
        
        process.stderr.write([
            `${isCode}`,
            `${color.blue("Name")}: ${this.name}\n`,
            `${color.yellow("Message")}: ${this.message}\n`,
            `${color.bold(color.whiteBright("Stack"))}: ${cleanStack}\n`
        ].join(' '));
    }

    static isError(error: any): error is ErrorHandler {
        return error instanceof ErrorHandler

    }

    static fromError(error: ErrorHandlerProps) {
        return new ErrorHandler(error)
    }


}

export type {ErrorHandlerProps}
export default ErrorHandler