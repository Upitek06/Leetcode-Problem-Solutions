class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        vector<bool> huruf(128, false);
        int count = 0, kr = 0, kn = 0;
        while (kn < s.size())
        {
            if (!huruf[s[kn]])
            {
                huruf[s[kn]] = true;
                count = max(count, kn - kr + 1);
                kn++;
            }
            else
            {
                huruf[s[kr]] = false;
                kr++;
            }
        }
        return count;
    }
};