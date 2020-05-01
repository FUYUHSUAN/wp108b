function add(a,b){

    var c=[];
    for(i=0;i<a.length;i++){
        c[i]=[];
        for(j=0;j<a[i].length;j++){
            c[i][j]=a[i][j]+b[i][j];
        }
    }
    return c;
}
var a = [[1,2],[3,4]], b = [[1,1],[1,1]];
var d=add(a,b);

console.log(d);