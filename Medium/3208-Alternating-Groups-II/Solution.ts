function numberOfAlternatingGroups(colors: number[], k: number): number {
    let l = 0, count = 0, n = colors.length;
    for (let r = 0; r < n + k - 1; r++) {
        if (colors[r % n] == colors[(r - 1) % n]) l = r;
        if (r - l + 1 >= k) count++;
    }
    return count;
};