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
}
module.exports=Vector;

