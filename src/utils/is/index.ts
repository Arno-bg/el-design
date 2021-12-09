const opt = Object.prototype.toString;

export function isArray(obj: any): obj is any[] {
    return opt.call(obj) === '[object Array]';
}

export function isObject(obj: any): obj is { [key: string]: any } {
    return opt.call(obj) === '[object Object]';
}

export function isString(obj: any): obj is string {
    return opt.call(obj) === '[object String]';
};

export const isArguments = (value: any = ""): boolean => {
    return opt.call(value) === "[object Arguments]";
};