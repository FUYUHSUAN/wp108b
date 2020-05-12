var sd=[1,2,3,4,5];
c=0;
b=0;
ans=0;
d=0;
for(i=0;i<sd.length;i++){
    b=sd[i]+b;
    c++;
}
b=b/c;
for(j=0;j<sd.length;j++){
    d=sd[j];
    ans+=(d-b)*(d-b);
} 
ans=ans/c;
ans=Math.sqrt(ans);
console.log("%d",ans);   
