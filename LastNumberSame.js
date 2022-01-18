const a=prompt("enter first no");
const b=prompt("enter second no");
const c=prompt("enter third no");
  const res1=a%10;
  const res2=b%10;
  const res3=c%10;

  if(res1==res2 && res1==res3){
      console.log(`${a},${b},${c} all end with same number`);
  }
  else{
    console.log(`${a},${b},${c} all not end with same number`); 
  }