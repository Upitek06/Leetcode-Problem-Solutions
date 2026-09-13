/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n == 1 || n == 7) return true;
    else if (n < 10) return false;
    else {
        let happy = 0;
        while (n > 0) {
            let temp = n % 10;
            happy += temp * temp;
            n = Math.floor(n / 10);
        }
        return isHappy(happy);
    }
};