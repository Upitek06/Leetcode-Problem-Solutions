class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int kiri = 0, kanan = nums.size() - 1;
        while (kiri <= kanan)
        {
            int mid = kiri + (kanan - kiri) / 2;
            if (nums[mid] < target)
                kiri = mid + 1;
            else if (nums[mid] > target)
                kanan = mid - 1;
            else
                return mid;
        }
        return -1;
    }
};