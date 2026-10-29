cl ass Solution{
    public :
        int searchInsert(vector<int> & nums, int target){
            int kiri = 0;
int kanan = nums.size() - 1;

while (kiri <= kanan)
{
    int tengah = kiri + (kanan - kiri) / 2;
    if (nums[tengah] == target)
    {
        return tengah;
    }
    else if (nums[tengah] > target)
    {
        kanan = tengah - 1;
    }
    else
    {
        kiri = tengah + 1;
    }
}
return kiri;
}
}
;