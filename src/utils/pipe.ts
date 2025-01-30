
const pipe = <T extends Function>(...functions: T[]) => {
    return <U>(input: U) => {
        return functions.reduce((acc, fn) => fn(acc), input);
    };
};
export {pipe}
