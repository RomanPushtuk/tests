import { throttle } from "./throttle";

test("should will be called immediately", () => {
    const func = jest.fn();
    const foo = throttle(func, 200);
    foo();
    expect(func).toHaveBeenCalled();
});

test("should will call 2 times", done => {
    const func = jest.fn();
    const foo = throttle(func, 100);
    foo(1);
    setTimeout(() => foo(2), 20);
    setTimeout(() => foo(3), 50);
    setTimeout(() => foo(4), 70);
    setTimeout(() => foo(5), 90);
    setTimeout(() => {
        expect(func).toHaveBeenCalledTimes(2);
        expect(func).toHaveBeenCalledWith(1);
        expect(func).toHaveBeenCalledWith(5);
        done();
    }, 100);
});