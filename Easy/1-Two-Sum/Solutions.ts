function twoSum(nums: number[], target: number): number[] {
    const hasil = {};
    for (let i = 0; i < nums.length; ++i) {
        let selisih = target - nums[i];
        if (selisih in hasil) {
            return [i, hasil[selisih]];
        }
        hasil[nums[i]] = i
    }
    return []
};