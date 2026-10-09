func numberOfAlternatingGroups(colors []int) int {
    n := len(colors)
    count := 0
    for i := 0; i < n; i++ {
        if colors[i%n]==colors[(i+2)%n]&&colors[(i+1)%n]!=colors[(i+2)%n]{
            count++
        }
    }
    return count
}