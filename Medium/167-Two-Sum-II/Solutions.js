/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let kiri = 0, kanan = numbers.length - 1;
    while (kiri < kanan) {
        if(numbers[kiri] + numbers[kanan] == target) return [kiri+1, kanan+1];
        else if(numbers[kiri] + numbers[kanan] < target) kiri++;
        else kanan--;
    }
    return []
};