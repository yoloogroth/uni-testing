export function fact(n: number){
    if (n == 0) {
        return 1;
    }
    if (n < 0 || n >= 16) {
        return 0;
    }
    const result:number = n * fact(n-1);
    return result;
}