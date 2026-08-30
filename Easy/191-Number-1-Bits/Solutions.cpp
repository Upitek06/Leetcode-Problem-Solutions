class Solution
{
public:
    int hammingWeight(int n)
    {
        vector<int> hasil;
        while (n > 0)
        {
            int temp = n;
            if (temp % 2 == 1)
            {
                hasil.push_back(temp % 2);
            }
            n = n / 2;
        }
        return hasil.size();
    }
};