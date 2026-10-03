function numSubarraysWithSum(nums: number[], goal: number): number {
    return solution(nums, goal) - solution(nums, goal - 1);
};

function solution(nums: number[], goal: number): number {
    let kanan = 0, jumlah = 0, hasil = 0;
    for (let i = 0; i < nums.length; ++i) {
        jumlah += nums[i];
        while (jumlah > goal && kanan <= i) {
            jumlah -= nums[kanan];
            ++kanan;
        }
        hasil += i - kanan + 1;
    }
    return hasil;
}