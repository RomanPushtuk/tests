import { myCreate} from "./myCreate";

test("__proto__ should be {a: 15, b: 20}", () => {
    const obj = myCreate({a: 15, b: 20});
    const __proto = Object.getPrototypeOf(obj);

    expect(__proto).toEqual({a: 15, b: 20});
});

test("__proto__ should be empty obj", () => {
    const obj = myCreate(null);
    const __proto = Object.getPrototypeOf(obj);

    expect(__proto).toEqual({});
});