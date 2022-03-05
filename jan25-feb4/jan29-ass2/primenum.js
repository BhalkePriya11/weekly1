const n1=parseInt(prompt("enter the number"));
const n2=parseInt(prompt("enter the number"));
      console.log("the prime numbers between n1 and n2 are:"); 
    for(i=1;i<=n2;i++){
     let a=0;
      for(j=2;j<i;j++){
        if(i%j==0){
        a=1;
        break;
 }
}
   if(i>1 && a==0){
     console.log(i);
 }
}
