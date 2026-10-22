function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let res = {};
    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(res, nums[i]) && Math.abs(i - res[nums[i]]) <= k) {
            return true;
        }
        res[nums[i]] = i;
    }
    return false;
};