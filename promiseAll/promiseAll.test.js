import { promiseAll } from "./promiseAll";

test("promiseAll should be resolve promise with arr[1,2,3,4]", () => {
    const arr = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
        Promise.resolve(4),
    ];

    promiseAll(arr).then(res => {
        expect(res).toEqual([1,2,3,4])
    })
});

test("promiseAll should be Неудача", () => {
    const arr = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
        Promise.reject(4),
    ];

    promiseAll(arr).catch(reason => {
        expect(reason).toBe("Неудача");
    })
});