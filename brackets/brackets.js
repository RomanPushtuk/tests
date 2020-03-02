export function brackets(str) {
    let stack = 0;
    const patterns = [["(",")"], ["[","]"], ["{", "}"]];

    str.split("").forEach(symbol => {
        patterns.forEach(pattern => {
            if (symbol === pattern[0]){
                stack++;
            }
            if (symbol === pattern[1]){
                stack--;
            }
        })
    });
    return !(stack > 0 || stack < 0);
}