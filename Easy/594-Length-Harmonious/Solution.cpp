class Solution
{
public:
    int findLHS(vector<int> &nums)
    {
        unordered_map<int, int> have;
        int lengthEnd = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if (have.find(nums[i]) != have.end())
            {
                have[nums[i]] += 1;
            }
            else
            {
                have[nums[i]] = 1;
            }
        }

        for (auto const &[angka, frekuensi] : have)
        {
            int neighbor = angka + 1;
            if (have.find(neighbor) != have.end())
            {
                int sum = frekuensi + have[neighbor];
                lengthEnd = max(lengthEnd, sum);
            }
        }
        return lengthEnd;
    }
};