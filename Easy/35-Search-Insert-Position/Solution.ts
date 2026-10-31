function searchInsert(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = Math.round(l + (r - l) / 2);
        if (nums[m] == target) return m;
        else if (nums[m] > target) r = m - 1;
        else l = m + 1;
    }
    return l;
};