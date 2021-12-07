const isArguments = (value: any = ""): boolean => {
    const calledValue = Object.prototype.toString.call(value);
    return calledValue === "[object Arguments]";
};

export default isArguments;