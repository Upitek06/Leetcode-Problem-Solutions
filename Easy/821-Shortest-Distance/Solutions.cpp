class Solution
{
public:
    vector<int> shortestToChar(string s, char c)
    {
        vector<int> temp;
        vector<int> res;
        int j = 0;
        for (int i = 0; i < s.size(); i++)
            if (s[i] == c)
                temp.push_back(i);
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == c)
            {
                j++;
                res.push_back(0);
            }
            else if (j == 0)
            {
                res.push_back(abs(i - temp[j]));
            }
            else if (j > 0 && j < temp.size())
            {
                int minimum = min(abs(i - temp[j - 1]), abs(i - temp[j]));
                res.push_back(minimum);
            }
            else if (j == temp.size())
                res.push_back(abs(i - temp[j - 1]));
        }
        return res;
    }
};