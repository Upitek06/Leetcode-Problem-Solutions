class Solution
{
public:
    int removeElement(vector<int> &nums, int val)
    {
        int k = 0;
        for (int one : nums)
        {
            if (one != val)
            {
                nums[k] = one;
                k++;
            }
        }
        return k;
    }
};