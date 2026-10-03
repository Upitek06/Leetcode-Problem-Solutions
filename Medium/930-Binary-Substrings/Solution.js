/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    return solution(nums, goal) - solution(nums, goal - 1);
};

var solution = function (nums, goal) {
    let kanan = 0, jumlah = 0, hasil = 0;
    for (let i = 0; i < nums.length; ++i) {
        jumlah += nums[i];
        while (jumlah > goal && kanan <= i) {
            jumlah -= nums[kanan];
            ++kanan;
        }
        hasil += i - kanan + 1;
    }
    return hasil;
};