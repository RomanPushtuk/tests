export function debounce(fn, interval) {
    let timerId = null;
    return function debounced(...arg) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.call(this, ...arg);
        }, interval);
    };
}