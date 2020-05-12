function neg(A){
    var c=[];
    for(i=0;i<2;i++){
        c[i]=[];
        for(j=0;j<2;j++){
            c[i][j]=0-A[i][j];
        }
    }
    return c;    
}
var a = [[1,2],[3,4]];
var d=neg(a);

console.log(d);
