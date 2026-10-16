class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int l = 0, z = 0, res = 0;
        for(int r = 0; r < nums.size(); r++){
            if(nums[r] == 0) z++;
            while(z > 1){
                if(nums[l] == 0) z--;
                l++;
            }
            res = max(res, r - l - z + 1);
        }
        if(res == nums.size()){
            return res - 1;
        }
        return res;
    }
};