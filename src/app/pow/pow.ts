export function pow(x: number, n:number){
    var r =1;
    if(n<0){
        r=0;
    }
    if(n==0){
        r=1;
    }
    else{
        for(var i=1; i<=n; i++){
            r=r*x;
        }
    }
    return r;
}