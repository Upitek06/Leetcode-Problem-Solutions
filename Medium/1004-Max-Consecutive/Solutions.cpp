class Solution
{
public:
    int longestOnes(vector<int> &nums, int k)
    {
        int j = 0, i = 0;
        for (i; i < nums.size(); i++)
        {
            if (nums[i] == 0)
                --k;
            if (k < 0)
            {
                if (nums[j] == 0)
                    ++k;
                ++j;
            }
        }
        return i - j;
    }
};