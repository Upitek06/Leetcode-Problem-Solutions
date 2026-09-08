class Solution
{
public:
    int trap(vector<int> &height)
    {
        int n = height.size();
        if (n == 0)
            return false;
        vector<int> LMax(n);
        vector<int> RMax(n);

        LMax[0] = height[0];
        for (int i = 1; i < n; i++)
        {
            LMax[i] = max(LMax[i - 1], height[i]);
        }

        RMax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--)
        {
            RMax[i] = max(RMax[i + 1], height[i]);
        }
        int res = 0;
        for (int i = 0; i < n; i++)
        {
            res += min(LMax[i], RMax[i]) - height[i];
        }
        return res;
    }
};