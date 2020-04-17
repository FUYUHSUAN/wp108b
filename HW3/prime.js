a=1;b=7;c=0;
for(i=a;i<=b;i++){
    d=0;
    for(j=2;j<i;j++){
        
        if(i%j===0){
            d=1;  
            break;
        }
    }
    if(i<2)d=1;
    if(d===0)c=c+1;   
}
console.log("countPrime(%d,%d)=>%d",a,b,c);
