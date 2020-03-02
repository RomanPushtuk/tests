export function monoton(arr) {
    if (arr[0] > arr[1]){
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] < arr[i + 1]){
                return false;
            }
        }
        return true;
    } else {
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i + 1]){
                return false;
            }
        }
        return true;
    }
}