function f(a){
    var array=[];
    var i=2;
    while(a>1){
        if(a%i==0){
            array.push(i);
            a=a/i;
            continue;
        }
        i++;
    }
    return array;
}
f(45);

console.log(f(45));