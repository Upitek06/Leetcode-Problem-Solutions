func sortColors(nums []int) {
	l, m, r := 0, 0, len(nums)-1
	for m <= r {
		if nums[m] == 0 {
			nums[m], nums[l] = nums[l], nums[m]
			l++
			m++
		} else if nums[m] == 1 {
			m++
		} else if nums[m] == 2 {
			nums[m], nums[r] = nums[r], nums[m]
			r--
		}
	}
}