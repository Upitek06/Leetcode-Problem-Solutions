function hammingWeight(n: number): number {
    let res = [];
    while (n > 0){
        let temp = n;
        if(n % 2 == 1){
            res.push(temp%2);
        }
        n = Math.floor(n/2);
    }
    return res.length;
};function hammingWeight(n: number): number {
    let res = [];
    while (n > 0){
        let temp = n;
        if(n % 2 == 1){
            res.push(temp%2);
        }
        n = Math.floor(n/2);
    }
    return res.length;
};