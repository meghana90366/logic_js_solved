const b= prompt("enter the number");
let m=0, n=1, o;
for( var i=1; i<=b;i++){
    console.log(m);
    o=m+n;
    m=n;
    n=o;
}
console.log(o);