func hammingWeight(n int) int {
    var res []int
    for n > 0 {
        temp := n
        if n % 2 == 1 {
            res = append(res, temp%2)
        }
        n = n / 2
    }   
    return len(res)
}