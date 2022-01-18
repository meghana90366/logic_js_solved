let  sum=0;
let number =prompt("enter the data");
let temp=number;
while(temp>0){
    let reminder=temp%10;
    sum+=reminder*reminder*reminder;
    temp=parseInt(temp/10);
}
if(sum==number){
    console.log('its a amstrong number');
}
else{
    console.log("its not a amstrong");
}