import { brackets } from "./brackets";

test("should return true", () => {
    expect(brackets("()123()32{3}1{{[wqe]}qwe}qweqwe()")).toBe(true);
});

test("should return false", () => {
    expect(brackets("(123)123()32{3}1{{[wqe]}qwe}qweqwe(")).toBe(false);
});

test("should return true", () => {
    expect(brackets("()(){}{{[]}}()")).toBe(true);
});