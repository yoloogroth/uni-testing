export function circle(r: number){
    if (r == 0 || r < 0) {
        return 0;
    }
    const pi = 3.1416;
    const result = pi * (r*r);
    return result;
}