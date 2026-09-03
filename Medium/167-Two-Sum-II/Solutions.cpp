class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int kiri = 0;
        int kanan = numbers.size()-1;
        while(kiri < kanan){
            int jumlah = numbers[kiri] + numbers[kanan];
            if (jumlah == target) return {kiri+1, kanan+1};
            else if (jumlah < target) kiri++;
            else kanan--;
        }
        return {};
    }
};