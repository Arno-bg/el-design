#### 重写loadash debounce
     自己参考效果 写出
        let timer = null
        const debounce = (callback, delay = 300) => {
            if (timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                callback();
            }, delay);
        };
    loadash debounce 源码重写
        ./index.ts