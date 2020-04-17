for(i=1;i<10;i++){
    var list=[]
    for(j=1;j< 10;j++){
        
        ans=i*j;
        list.push(j+"*"+i+"="+ans+'\t');
    }
    console.log(list.join());
}