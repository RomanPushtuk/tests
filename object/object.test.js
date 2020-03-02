import { object } from "./object";

test("obj1 should be is equal to test objs", () => {
    const obj1 = {a: {b: {c: null}}};
    const obj2 = {a: {b: {c: {d: null}}}};

    expect(object("a.b.c")).toEqual(obj1);
    expect(object("a.b.c.d")).toEqual(obj2);
});