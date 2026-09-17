/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    temp = [];
    res = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            temp.push(i);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            j++;
            res.push(0);
        } else if (j == 0) {
            res.push(Math.abs(i - temp[0]));
        } else if (j > 0 && j < temp.length) {
            let minimum = Math.min(Math.abs(i - temp[j - 1]), Math.abs(i - temp[j]));
            res.push(minimum);
        } else if (j == temp.length) {
            res.push(Math.abs(i - temp[j - 1]));
        }
    }
    return res;
};