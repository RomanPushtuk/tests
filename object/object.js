export function object(str) {
    let obj = {};
    let buff = null;
    const arr = str.split(".");

    arr.forEach((key, index) => {
        if (!buff){
            obj[key] = {};
            buff = obj[key];
        } else {
            buff[key] = index === arr.length -1 ? null : {};
            buff = buff[key];
        }
    });

    return obj;
}