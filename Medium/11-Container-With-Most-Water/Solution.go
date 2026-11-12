func maxArea(height []int) int {
	l, r, highest := 0, len(height)-1, 0
	for l < r {
		highest = max(highest, (r-l)*min(height[l], height[r]))
		if height[l] < height[r] {
			l++
		} else {
			r--
		}
	}
	return highest
}