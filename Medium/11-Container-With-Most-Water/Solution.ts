function maxArea(height: number[]): number {
    let l = 0, r = height.length - 1, highest = 0;
    while (l < r) {
        highest = Math.max(highest, (r - l) * Math.min(height[l], height[r]));
        if (height[l] < height[r]) l++;
        else r--;
    }
    return highest;
};