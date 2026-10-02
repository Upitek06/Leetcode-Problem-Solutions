class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        return solution(nums, goal) - solution(nums, goal-1);
    }

    int solution(vector<int>& nums, int goal){
        int kanan = 0, jumlah = 0, hasil = 0;
        for(int i = 0; i < nums.size(); ++i){
            jumlah += nums[i];
            while(jumlah > goal && kanan <= i){
                jumlah -= nums[kanan];
                ++kanan;
            }
            hasil += i - kanan + 1;
        }
        return hasil;
    }
};