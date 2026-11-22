func removeDuplicates(nums []int) int {
    count := 0
    for i := 0; i < len(nums); i++{
        if count < 2 || nums[i] > nums[count - 2]{
            nums[count] = nums[i]
            count++
        }
    }
    return count
}