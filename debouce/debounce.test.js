import { debounce } from "./debouce";

test("should will be call after 160ms", done => {
    const func = jest.fn();
    const foo = debounce(func, 100);

    foo();
    setTimeout(() => foo(), 50);
    setTimeout(() => {
        expect(func).toHaveBeenCalledTimes(1);
        done();
    }, 160);
});

test("should will be call two times after 405ms", done => {
    const func = jest.fn();
    const foo = debounce(func, 100);
    foo();
    setTimeout(() => foo(), 100);
    setTimeout(() => foo(), 200);
    setTimeout(() => foo(), 300);
    setTimeout(() => {
        expect(func).toHaveBeenCalledTimes(2);
        done();
    }, 405);
});