import isArguments from "../isArguments";
type TPredicate = (value: any) => boolean;
/*
    内置的Symbol.isConcatSpreadable符号
    用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。
*/
const spreadableSymbol = Symbol.isConcatSpreadable;

export const isFlattenable = (value: any): boolean => {
    return Array.isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol]);
};

export const baseFlatten = (_array: Array<any>, _depth: number, predicate?: TPredicate, _isStrict?: boolean, result?: any[]): Array<any> => {
    // predicate默认为isFlattenable, 传入的array如果是可以`flatten`化，返回true，
    predicate || (predicate = isFlattenable);
    result || (result = []);

    if (_array === null) {
        return result;
    }

    for (const value of _array) {
        if (_depth > 0 && predicate(value)) {
            if (_depth > 1) {
                baseFlatten(value, _depth - 1, predicate, _isStrict, result)
            } else {
                result.push(...value)
            }
        } else if (!_isStrict) {
            result[result.length] = value;
        }
    }

    return result;
};

export const flatten = (_array: any, depth: number = 1, predicate?: TPredicate): Array<any> => {
    const _length = _array === null ? 0 : _array.length;

    return _length ? baseFlatten(_array, depth, predicate) : [];
};

export default flatten;