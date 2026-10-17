function longestSubarray(nums: number[]): number {
    let l = 0, z = 0, res = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] == 0) z++;
        while (z > 1) {
            if (nums[l] == 0) z--;
            l++;
        }
        res = Math.max(res, r - l - z + 1);
    }
    if (res == nums.length) return res - 1;
    return res;
}; function longestSubarray(nums: number[]): number {
    let l = 0, z = 0, res = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] == 0) z++;
        while (z > 1) {
            if (nums[l] == 0) z--;
            l++;
        }
        res = Math.max(res, r - l - z + 1);
    }
    if (res == nums.length) return res - 1;
    return res;
};