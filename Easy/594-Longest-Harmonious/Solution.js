/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let data = {}, maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (data[nums[i]] !== undefined) {
            data[nums[i]] += 1;
        } else {
            data[nums[i]] = 1;
        }
    }
    for (const [key, value] of Object.entries(data)) {
        let neighbor = Number(key) + 1;
        if (data[neighbor] !== undefined) {
            let jumlahkan = value + data[neighbor];
            maxLength = Math.max(maxLength, jumlahkan);
        }
    }
    return maxLength;
};