let fib=promt("enter the number");
 let a=0;
 let b=1;
 let c=0;
     for(i=2;i<=fib;i++){
        c=a+b;
        a=b;
        b=c;
     console.log(a);
     console.log(b);
}
