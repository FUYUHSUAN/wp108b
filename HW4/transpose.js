var a=[[1,2,3],[3,2,1]];
var b=[];
for(var i=0;i<3;i++){
    b[i]=[];
   for(var j=0;j<2;j++){
        b[i][j]=a[j][i];
   }
   
}
console.log(b);