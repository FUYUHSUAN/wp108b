class Vector {
  constructor(array) {
    this.array= array;
  }
  add(vector2) {
    var c=[];
    var i;
    for(i=0;i<this.array.length;i++){
       c[i]=this.array[i]+vector2.array[i];
    }
    return new Vector(c);
  }
  neg(){
    var d=[];
    var j;
    for(j=0;j<this.array.length;j++){
      d[j]=-this.array[j];
    }
    return new Vector(d);
  }
  dot(vector2){
    var s=0;
    var i;
    for(i=0;i<this.array.length;i++){
      s+=this.array[i]*vector2.array[i];
    }
    return s;
  }
  sub(vector2){
    var c=[];
    var i;
    for(i=0;i<this.array.length;i++){
       c[i]=this.array[i]-vector2.array[i];
    }
    return new Vector(c);
  }
}


var v1 = new Vector([1,2,3])
var v2 = new Vector([1,1,1])
var v3 = new Vector([1,2,1])
console.log('v1.add(v2)=', v1.add(v2))
console.log('v2.add(v3)=',v2.add(v3))
console.log('v1.neg()=',v1.neg())
console.log('v1.dot(v3)=',v1.dot(v3))
console.log('v1.neg()=', v2.sub(v1))
/*console.log('v1.dot(v2)=', v1.dot(v2))
console.log('v1.neg()=', v1.neg())*/
/*function add(a,b){

    var c=[];
    for(i=0;i<a.length;i++){
       c[i]=a[i]+b[i];
    }
    return c;
}
var a = [1,2], b = [1,1];
var d=add(a,b);

console.log(d);*/