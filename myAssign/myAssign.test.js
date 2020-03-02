import { myAssign } from "./myAssign";

test("obj1 should be consist value from obj2 and obj3", () => {
    const obj1 = {};
    const obj2 = {a: 15, b: 20};
    const obj3 = {a: 12, c: 30};

    expect(myAssign(obj1, obj2, obj3)).toStrictEqual(Object.assign(obj1, obj2, obj3));
});