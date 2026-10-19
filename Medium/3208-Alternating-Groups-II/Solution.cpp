class Solution
{
public:
    int numberOfAlternatingGroups(vector<int> &colors, int k)
    {
        int l = 0, count = 0, n = colors.size();
        for (int r = 0; r < n + k - 1; r++)
        {
            if (r > 0 && colors[r % n] == colors[(r - 1) % n])
                l = r;
            if (r - l + 1 >= k)
                count++;
        }
        return count;
    }
};