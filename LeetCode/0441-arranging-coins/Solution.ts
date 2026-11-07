function arrangeCoins(n: number): number {
    let k = 0;
    while(n >= k + 1){
        k++;
        n-=k;
    };
    return k;
};