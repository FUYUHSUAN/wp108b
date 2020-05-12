function f(A){
     var b=[];
     for(var i=0;i<3;i++){
          b[i]=[];
          for(var j=0;j<2;j++){
               b[i][j]=A[j][i];
          }
          
     }
     return b;
}
var a=[[1,2,3],[3,2,1]];

var c=f(a);
console.log(c);