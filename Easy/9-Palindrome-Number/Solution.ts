function isPalindrome(x: number): boolean {
    let strx = String(x);
    let j = strx.length - 1;
    for (let i = 0; i < strx.length; ++i) {
        if (strx[i] != strx[j]) return false;
        j--;
    }
    return true;
};