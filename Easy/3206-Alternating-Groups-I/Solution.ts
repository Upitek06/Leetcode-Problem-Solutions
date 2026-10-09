function numberOfAlternatingGroups(colors: number[]): number {
    let n = colors.length, count = 0;
    for (let i = 0; i < n; ++i) {
        if (colors[i % n] == colors[(i + 2) % n] && colors[(i + 1) % n] != colors[(i + 2) % n]) {
            count++;
        }
    }
    return count
};