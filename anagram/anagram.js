export function anagram(arr){
    const res = [];

    for (let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j++){
            let a = arr[i].split("").sort().join("");
            let b = arr[j].split("").sort().join("");

            if (a === b && i !== j && !res.includes(a)){
                res.push(arr[j]);
            }
        }
    }

    return res
}