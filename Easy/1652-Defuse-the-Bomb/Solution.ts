function decrypt(code: number[], k: number): number[] {
    let n = code.length;
    const arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++){
        if (k > 0){
            for(let j = i+1; j < i+1+k; j++){
                arr[i] += code[j % n];
            }
        }
        if (k < 0){
            for(let j = i-1; j > i-1-Math.abs(k); j--){
                arr[i] += code[((j % n)+n)%n];
            }
        }
    }
    return arr;
};