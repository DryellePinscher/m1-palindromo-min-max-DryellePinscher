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
    
}
