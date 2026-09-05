class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> hasil;
        for (int i = 0; i < nums.size(); i++)
        {
            int selisih = target - nums[i];
            if (hasil.find(selisih) != hasil.end())
            {
                return {i, hasil[selisih]};
            }
            hasil[nums[i]] = i;
        }
        return {};
    }
};