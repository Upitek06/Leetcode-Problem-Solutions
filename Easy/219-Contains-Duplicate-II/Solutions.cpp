class Solution
{
public:
    bool containsNearbyDuplicate(vector<int> &nums, int k)
    {
        unordered_map<int, int> exist;
        for (int i = 0; i < nums.size(); i++)
        {
            int same = nums[i];
            if (exist.find(same) != exist.end() && abs(i - exist[same]) <= k)
                return true;
            exist[same] = i;
        }
        return false;
    }
};