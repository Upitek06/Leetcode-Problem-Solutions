class Solution
{
public:
    vector<int> sortedSquares(vector<int> &nums)
    {
        vector<int> hasil;
        for (int i = 0; i < nums.size(); i++)
        {
            hasil.push_back(nums[i] * nums[i]);
        }
        sort(hasil.begin(), hasil.end());
        return hasil;
    }
};