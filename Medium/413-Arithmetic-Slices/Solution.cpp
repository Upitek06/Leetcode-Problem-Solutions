class Solution
{
public:
    int numberOfArithmeticSlices(vector<int> &nums)
    {
        int n = nums.size(), val = 0, valPrev = 0, res = 0;
        for (int i = 2; i < n; i++)
        {
            if (nums[i - 1] - nums[i - 2] == nums[i] - nums[i - 1])
                val = valPrev + 1;
            res += val;
            valPrev = val;
            val = 0;
        }
        return res;
    }
};