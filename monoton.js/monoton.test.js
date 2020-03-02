import { monoton } from "./monoton";

test("should return true", () => {
    expect(monoton([1,2,3,4])).toBe(true);
    expect(monoton([-1,-2,-3,-4])).toBe(true);
    expect(monoton([8,12,14,18])).toBe(true);
    expect(monoton([8,12,14,9,7])).toBe(false);
});