func longestSubarray(nums []int) int {
	l, z, res := 0, 0, 0
	for r := 0; r < len(nums); r++ {
		if nums[r] == 0 {
			z += 1
		}
		for z > 1 {
			if nums[l] == 0 {
				z -= 1
			}
			l += 1
		}
		res = max(res, r-l-z+1)
	}
	if res == len(nums) {
		return res - 1
	}
	return res
}