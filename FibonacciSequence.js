const a=prompt("enter the data");
var m=0,n=1,x;
for( var i=1;i<=a;i++){
    
    x=m+n;
    // console.log(x);
    m=n;
    n=x;
}
console.log(x);