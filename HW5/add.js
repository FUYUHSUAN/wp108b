var a = [[1,2],[3,4]], b = [[1,1],[1,1]]
//add(a, b)

var c=[];
for(i=0;i<2;i++){
    c[i]=[];
    for(j=0;j<2;j++){
        c[i][j]=a[i][j]+b[i][j];
    }
}
console.log(c);