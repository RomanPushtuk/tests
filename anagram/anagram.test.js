import { anagram } from "./anagram";

test("obj1 should be is equal to test array", () => {
    const anagram1_test = ["123", "231", "321", "abc" , "cab" , "bac" , "fvk"];
    const anagram1_result = [ "231","321","123", "cab", "bac", "abc"];

    const anagram2_test = ["abc", "cab", "fvk"];
    const anagram2_result = ["cab", "abc"];

    expect(anagram(anagram1_test)).toEqual(anagram1_result);
    expect(anagram(anagram2_test)).toEqual(anagram2_result);
});