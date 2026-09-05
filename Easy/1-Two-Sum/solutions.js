/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hasil = {};
    for (let i = 0; i < nums.length; i++) {
        let selisih = target - nums[i];
        if (selisih in hasil) {
            return [i, hasil[selisih]];
        }
        hasil[nums[i]] = i;
    }
    return [];
};