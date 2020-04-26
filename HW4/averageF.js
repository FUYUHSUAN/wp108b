function av(i){

    c=1;
    ans=0;
    for(i=0;i<a.length;i++){
        ans=a[i]+ans;
        c++;
    }
ans=ans/c; 
}
var a=[1,2,3,4,5,6,7];
av(a);  
console.log("The average of this array is %d",ans);