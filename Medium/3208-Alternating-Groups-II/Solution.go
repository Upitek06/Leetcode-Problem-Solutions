func numberOfAlternatingGroups(colors []int, k int) int {
	l, count, n := 0, 0, len(colors)
	for r := 0; r < n+k-1; r++ {
		if r > 0 && colors[r%n] == colors[(r-1)%n] {
			l = r
		}
		if r-l+1 >= k {
			count += 1
		}
	}
	return count
}