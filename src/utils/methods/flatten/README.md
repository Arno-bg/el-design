## 数组拍平方法
    ### 1. 数组内的成员如果是数组，那么就会被展开到，内部的元素成为上一级数组的元素。
    ### 实例:
        [1,[2,3, [4, 5]], [6,7],[8, [9, [10]]]]
        变为
        [1,2,3,4,5,6,7,8,9,10] 

### 自己实现
    /**
    * @param origin_array <any>[] 
    *        入参需要是Array类型 不限制Array中的子项类型
    * @returns result_array <any>[]
    *        返回值为一个拍平后全新引用的数组
    */
    const flatten = (origin_array: Array<any>): Array<any> => {
        let result_array: any[] = [];
        const isArray = Array.isArray;

        for(let i = 0; i < origin_array.length; i++) {
            if (isArray(origin_array[i])) {
                result_array = result_array.concat(flatten(origin_array[i]));
            } else {
                result_array.push(origin_array[i]);
            }
        }

        return result_array;
    };

### loadash 源码实现
    参考 index.ts