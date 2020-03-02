export function promiseAll(arr){
    return new Promise((response, reject) => {
        const result = [];
        let countThenCall = 0;

        const thenCb = value => {
            countThenCall += 1;
            result.push(value);

            if (arr.length === countThenCall) response(result);
        };

        arr.forEach(promise => {
           if (!promise.then) promise = Promise.resolve(promise);

           promise.then(thenCb).catch(() => reject("Неудача"));
        });
    })
}