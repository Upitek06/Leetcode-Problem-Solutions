class Solution
{
public:
    int minimumSumSubarray(vector<int> &nums, int l, int r)
    {
        int minVal = INT_MAX;
        for (int i = l; i < r + 1; ++i)
        {
            int count = 0;
            for (int j = 0; j < i; ++j)
            {
                count += nums[j];
            }
            if (count > 0)
            {
                minVal = min(minVal, count);
            }

            int low = 0, high = i;
            while (high < nums.size())
            {
                count -= nums[low];
                count += nums[high];

                low++;
                high++;

                if (count > 0)
                {
                    minVal = min(minVal, count);
                }
            }
        }
        if (minVal == INT_MAX)
            return -1;
        return minVal;
    }
};