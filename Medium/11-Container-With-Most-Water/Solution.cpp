class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int terbesar = 0, kiri = 0, kanan = height.size() - 1;

        while (kiri < kanan)
        {
            terbesar = max(terbesar, (kanan - kiri) * min(height[kiri], height[kanan]));

            if (height[kiri] < height[kanan])
            {
                kiri++;
            }
            else
            {
                kanan--;
            }
        }
        return terbesar;
    }
};