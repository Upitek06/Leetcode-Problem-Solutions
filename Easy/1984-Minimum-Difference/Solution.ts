function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let res = nums[k - 1] - nums[0];
    for (let i = 0; i + k <= nums.length; i++) {
        res = Math.min(res, nums[i + k - 1] - nums[i]);
    }
    return res;
};