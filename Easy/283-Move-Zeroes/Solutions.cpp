class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int kiri = 0;
        int kanan = 0;
        while (kanan < nums.size())
        {
            if (nums[kanan] != 0)
            {
                nums[kiri] = nums[kanan];
                kiri++;
            }
            kanan++;
        }
        for (kiri; kiri < nums.size(); kiri++)
        {
            nums[kiri] = 0;
        }
    }
};