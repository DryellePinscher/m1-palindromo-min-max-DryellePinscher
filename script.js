function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = cleanStr.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanStr[i] !== cleanStr[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function arrayMaxMin(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}
