func numberOfArithmeticSlices(nums []int) int {
    n, val, valPrev, res := len(nums), 0, 0, 0
    for i := 2; i < n; i++ {
        if nums[i-1] - nums[i-2] == nums[i]-nums[i-1] { val = valPrev + 1 }
        res += val
        valPrev = val
        val = 0
    }
    return res
}