export function throttle(fn, ms) {
    let isThrottling = false;
    let lastArguments = null;

    return function foo(...arg){
        if(isThrottling){
            lastArguments = arg;
            return;
        }

        fn(...arg);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;
            if(lastArguments){
                foo(...lastArguments);
                lastArguments = null;
            }
        }, ms)
    }
}