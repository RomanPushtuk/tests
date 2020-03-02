import { transfer } from "./transfer";

test("should return true", () => {
    const arr1 = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    const arr1_1 = [
        [3,6,9],
        [2,5,8],
        [1,4,7]
    ];

    const arr2 = [
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];

    const arr2_2 = [
        [15, 20, 25],
        [14, 19, 24],
        [13, 18, 23],
        [12, 17, 22],
        [11, 16, 21]
    ];

    expect(transfer(arr1)).toStrictEqual(arr1_1);

    expect(transfer(arr2)).toStrictEqual(arr2_2);
});